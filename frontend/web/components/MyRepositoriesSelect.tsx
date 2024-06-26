import { FC, useEffect } from 'react'
import { useGetGithubRepositoriesQuery } from 'common/services/useGithubRepository'
import RepositoriesSelect from './RepositoriesSelect'

type MyRepositoriesSelectType = {
  githubId: string
  orgId: string
  onChange: (value: string) => void
}

const MyRepositoriesSelect: FC<MyRepositoriesSelectType> = ({
  githubId,
  onChange,
  orgId,
}) => {
  const { data } = useGetGithubRepositoriesQuery({
    github_id: githubId,
    organisation_id: orgId,
  })

  useEffect(() => {
    if (data?.results.length === 1) {
      const repo = data?.results[0]
      onChange(`${repo.repository_name}/${repo.repository_owner}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className='mt-4'>
      {!!data?.results.length && data?.results.length !== 1 && (
        <>
          <RepositoriesSelect
            repositories={data?.results}
            onChange={onChange}
          />
        </>
      )}
    </div>
  )
}

export default MyRepositoriesSelect
