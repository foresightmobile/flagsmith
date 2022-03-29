# Generated by Django 3.2.12 on 2022-02-17 17:14
from django.db import migrations

from core.migration_helpers import PostgresOnlyRunSQL


class Migration(migrations.Migration):
    """
    Remove existing unique constraints. Note that only postgres supports these
    constraints, so we don't need to worry about oracle / mysql as they will not exist
    there in the first place.
    """

    atomic = False

    dependencies = [
        ("features", "0035_auto_20211109_0603"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.RemoveConstraint(
                    model_name="featurestate",
                    name="unique_for_feature_segment",
                ),
                migrations.RemoveConstraint(
                    model_name="featurestate",
                    name="unique_for_identity",
                ),
                migrations.RemoveConstraint(
                    model_name="featurestate",
                    name="unique_for_environment",
                ),
            ],
            database_operations=[
                PostgresOnlyRunSQL(
                    'DROP INDEX CONCURRENTLY "unique_for_environment";',
                    reverse_sql="""CREATE UNIQUE INDEX CONCURRENTLY "unique_for_environment" 
                    ON "features_featurestate" ("environment_id", "feature_id") 
                    WHERE ("feature_segment_id" IS NULL AND "identity_id" IS NULL);""",
                ),
                PostgresOnlyRunSQL(
                    'DROP INDEX CONCURRENTLY "unique_for_feature_segment";',
                    reverse_sql="""CREATE UNIQUE INDEX CONCURRENTLY "unique_for_feature_segment" 
                    ON "features_featurestate" ("environment_id", "feature_id", "feature_segment_id") 
                    WHERE "identity_id" IS NULL;""",
                ),
                PostgresOnlyRunSQL(
                    'DROP INDEX CONCURRENTLY "unique_for_identity";',
                    reverse_sql="""CREATE UNIQUE INDEX CONCURRENTLY "unique_for_identity" 
                    ON "features_featurestate" ("environment_id", "feature_id", "identity_id") 
                    WHERE "feature_segment_id" IS NULL;""",
                ),
            ],
        ),
    ]
