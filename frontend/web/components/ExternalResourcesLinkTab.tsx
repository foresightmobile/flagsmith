import React, { FC, useState } from 'react'
import MyRepositoriesSelect from './MyRepositoriesSelect'
import ExternalResourcesTable, {
  ExternalResourcesTableBase,
} from './ExternalResourcesTable'
import { ExternalResource } from 'common/types/responses'
import { GitHubResourceSelectProvider } from './GitHubResourceSelectProvider'
import { useCreateExternalResourceMutation } from 'common/services/useExternalResource'
import Constants from 'common/constants'
import Button from './base/forms/Button'
import GitHubResourcesSelect from './GitHubResourcesSelect'
import _ from 'lodash'

type ExternalResourcesLinkTabType = {
  githubId: string
  organisationId: string
  featureId: string
  projectId: string
}

type AddExternalResourceRowType = ExternalResourcesTableBase & {
  linkedExternalResources?: ExternalResource[]
}

type GitHubStatusType = {
  value: number
  label: string
}

const AddExternalResourceRow: FC<AddExternalResourceRowType> = ({
  featureId,
  linkedExternalResources,
  organisationId,
  projectId,
  repoName,
  repoOwner,
}) => {
  const [externalResourceType, setExternalResourceType] = useState<string>('')
  const [featureExternalResource, setFeatureExternalResource] =
    useState<string>('')
  const [lastSavedResource, setLastSavedResource] = useState<
    string | undefined
  >(undefined)
  const [createExternalResource] = useCreateExternalResourceMutation()
  const githubTypes = Object.values(Constants.resourceTypes).filter(
    (v) => v.type === 'GITHUB',
  )
  return (
    <div className='mt-4'>
      <Flex style={{ maxWidth: '170px' }}>
        <Select
          size='select-md'
          placeholder={'Select Type'}
          onChange={(v: GitHubStatusType) => setExternalResourceType(v.label)}
          options={githubTypes.map((e) => {
            return { label: e.label, value: e.id }
          })}
        />
      </Flex>
      <Row className='mt-4'>
        <Flex>
          {externalResourceType && (
            <GitHubResourceSelectProvider
              lastSavedResource={lastSavedResource}
              linkedExternalResources={linkedExternalResources!}
              orgId={organisationId}
              onChange={(v) => setFeatureExternalResource(v)}
              repoOwner={repoOwner}
              repoName={repoName}
              githubResource={
                (
                  _.find(_.values(Constants.resourceTypes), {
                    label: externalResourceType!,
                  }) as any
                ).resourceType || ''
              }
            >
              <GitHubResourcesSelect
                onChange={(v) => setFeatureExternalResource(v)}
                lastSavedResource={lastSavedResource}
              />
            </GitHubResourceSelectProvider>
          )}
        </Flex>
        <div className='table-column text-center' style={{ width: '80px' }}>
          <Button
            className='text-right'
            theme='primary'
            disabled={!externalResourceType || !featureExternalResource}
            onClick={() => {
              const type = Object.keys(Constants.resourceTypes).find(
                (key: string) =>
                  Constants.resourceTypes[
                    key as keyof typeof Constants.resourceTypes
                  ].label === externalResourceType,
              )
              createExternalResource({
                body: {
                  feature: parseInt(featureId),
                  metadata: {},
                  type: type!,
                  url: featureExternalResource,
                },
                feature_id: featureId,
                project_id: projectId,
              }).then(() => {
                toast('External Resource Added')
                setLastSavedResource(featureExternalResource)
              })
            }}
          >
            Save
          </Button>
        </div>
      </Row>
    </div>
  )
}

const ExternalResourcesLinkTab: FC<ExternalResourcesLinkTabType> = ({
  featureId,
  githubId,
  organisationId,
  projectId,
}) => {
  const [repoName, setRepoName] = useState<string>('')
  const [repoOwner, setRepoOwner] = useState<string>('')
  const [selectedResources, setSelectedResources] =
    useState<ExternalResource[]>()

  return (
    <>
      <h5>GitHub Issues and Pull Requests linked</h5>
      <ExternalResourcesTable
        featureId={featureId}
        projectId={projectId}
        organisationId={organisationId}
        repoOwner={repoOwner}
        repoName={repoName}
        setSelectedResources={(r: ExternalResource[]) =>
          setSelectedResources(r)
        }
      />
      <label className='cols-sm-2 control-label mt-4'>
        {' '}
        Link new Issue / Pull Request{' '}
      </label>
      <FormGroup>
        <MyRepositoriesSelect
          githubId={githubId}
          orgId={organisationId}
          onChange={(v) => {
            const repoData = v.split('/')
            setRepoName(repoData[0])
            setRepoOwner(repoData[1])
          }}
        />
        {repoName && repoOwner && (
          <AddExternalResourceRow
            featureId={featureId}
            projectId={projectId}
            organisationId={organisationId}
            repoName={repoName}
            repoOwner={repoOwner}
            linkedExternalResources={selectedResources}
          />
        )}
      </FormGroup>
    </>
  )
}

export default ExternalResourcesLinkTab
