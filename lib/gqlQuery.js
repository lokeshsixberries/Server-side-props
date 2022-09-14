import { gql } from "@apollo/client";

export const GET_JOB_POSTS = gql`
query posts(
  $limit: Int
  $offset: Int
  $title: String
  $locationsIds: [Int]
  $jobTypes: [String]
  $jobSectors: [Int]
  $jobSectorsIds: [Int]
  $jobRecruiters: [String]
  $indSectorsIds: [Int]
  $workingLocationTypes: [Int]
  $salary: BaseFloatRange
  $contentTypesIds: Int
) {
  posts(
    limit: $limit
    offset: $offset
    filter: {
      title: $title
      locationsIds: $locationsIds
      jobTypes: $jobTypes
      jobSectors: $jobSectors
      salary: $salary
      jobSectorsIds: $jobSectorsIds
      contentTypesIds: $contentTypesIds
      workingLocationTypes: $workingLocationTypes
      jobRecruiters: $jobRecruiters
      indSectorsIds: $indSectorsIds
    }
  ) {
    id
    title
    isSalaryVisible
    summary
    insertedAt
    salaryMin
    salaryMax
    currency
    jobType
    workingLocationTypes
    locations {
      id
      path
      name
    }
    source {
      id
      name
      logoS3
    }
  }
}
`;
