import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const GET_JOB_POSTS = `
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

function Home({ data }) {
  console.log(data?.data);
  return (
    <div>
      {(data?.data?.posts || []).map((item) => {
        return (
          <>
            <h4>{item.title}</h4>
          </>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  let data = [];
  let error = "";
  try {
    const res = await fetch("https://infabode-staging.com/public_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "*",
      },
      body: JSON.stringify({
        query: `${GET_JOB_POSTS}`,
      }),
    });

    data = await res.json();
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      data,
    },
  };
}

export default Home;
