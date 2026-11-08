# AWS Cloud-Native CI Pipeline
# AWS Cloud-Native Continuous Integration Pipeline

## Project Overview

This project demonstrates the implementation of a cloud-native Continuous Integration (CI) pipeline using Amazon Web Services (AWS).

The pipeline is designed to automate the process of retrieving source code, installing dependencies, building a Node.js application, executing automated tests and generating build artifacts.

## Project Objectives

- Implement source control using AWS CodeCommit.
- Automate application builds using AWS CodeBuild.
- Configure AWS CodePipeline to orchestrate the CI workflow.
- Automatically trigger builds following source code changes.
- Secure AWS service interactions using IAM roles.
- Store generated build artifacts in Amazon S3.

## Technologies Used

- AWS CodeCommit — Source control
- AWS CodeBuild — Automated builds and testing
- AWS CodePipeline — CI orchestration
- Amazon S3 — Artifact storage
- AWS IAM — Access management
- Node.js — Application development
- Git — Version control
- Windows PowerShell — Local development environment

## CI Pipeline Architecture

Developer → AWS CodeCommit → AWS CodePipeline → AWS CodeBuild → Amazon S3

## Project Structure

```text
aws-ci-project/
├── src/
│   └── app.js
├── tests/
│   └── app.test.js
├── package.json
├── package-lock.json
├── buildspec.yml
└── README.md
```

## Build and Test Process

The `buildspec.yml` file defines the build process.

**Install phase:** Installs application dependencies using `npm ci`.

**Build phase:** Checks application syntax using `npm run build` and executes automated tests using `npm test`.

**Post-build phase:** Records completion of the build process.

**Artifacts:** Packages the application source files and supporting configuration for storage in the pipeline's S3 artifact bucket.

## IAM Roles and Security

The project uses IAM to control access to AWS resources.

| IAM Identity | Purpose |
|---|---|
| aws-ci-devops-user | CLI access and project administration |
| CodeBuild service role | Access source code, write build logs and access required artifacts |
| CodePipeline service role | Coordinate source retrieval, builds and artifact transfers |

The exact service role names and permissions should be verified in the AWS IAM console.

## Environment Variables

AWS Region: `eu-west-2`

Node.js runtime: `22` in the buildspec.

Custom environment variables: [List configured variables or state None.]

No AWS access keys or other secrets are stored in the repository.

## Testing and Validation

Local application testing: [Passed / Pending]

AWS CodeBuild execution: [Succeeded / Pending]

CodePipeline Source stage: [Succeeded / Pending]

CodePipeline Build stage: [Succeeded / Pending]

Automatic trigger after Git push: [Verified / Pending]

S3 artifact generation: [Verified / Pending]

## Challenges and Troubleshooting

During implementation, Git authentication initially returned an HTTP 403 error. The Git credential configuration was adjusted to use the AWS CLI CodeCommit credential helper, allowing source code to be pushed successfully.

An initial CodeBuild execution failed because `buildspec.yml` was interpreted as a shell command instead of being loaded as a build specification. The build configuration required correction.

## Repository

AWS CodeCommit repository: `aws-cloud-native-ci-pipeline`

Region: `eu-west-2`

## Conclusion

This project demonstrates how AWS managed DevOps services can be combined to automate application integration and testing.

Final validation of the pipeline, automatic triggers and artifact generation will be documented after successful execution.

CI pipeline trigger verification.
