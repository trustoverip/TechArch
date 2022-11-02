# Contribution Guide

There are many ways to be a contributor, and we're here to help you on your way!
You may:

* Join the discussion and share ideas in our [Slack
  channel](trustoverip.slack.com) and regular
  [TSWG](https://wiki.trustoverip.org/display/HOME/Technology+Stack+Working+Group?src=contextnavpagetreemode)
  and
  [TATF](https://wiki.trustoverip.org/display/HOME/Technology+Architecture+Task+Force)
  meetings.
* Raise an [issue](https://github.com/trustoverip/TechArch/issues) or feature
  request in our issue tracker
* Help another contributor with one of their questions, or a documentation
  review
* Suggest improvements by supplying a [Pull
  Request](https://github.com/trustoverip/TechArch/pulls) or opening a
  [Discussion](https://github.com/trustoverip/TechArch/discussions)
* Evangelize our work together in conferences, podcasts, and social media
  spaces.

This guide is for you.

## Table Of Contents

* [Contributing](#contributing)
  * [Basic Flow](#basic-change-flow)
  * [Advanced Flow](#advanced-change-flow)
  * [Commits](#commits)
  * [Branching](#branching)
  * [Tagging](#tagging)
  * [Pull Requests](#pull-requests)
  * [Review](#review)
* [Issues](#issues)
* [Labels](#labels)
  * [Priority Labels](#priority-labels)
  * [Type Labels](#type-labels)
  * [Status Labels](#status-labels)

## Contributing

This section is designed to help you make an edit if you aren't familiar with
using Github and want to make a change to the TechArch repository.

### Basic Change Flow

If you're not familiar with Github and Git, here's a few simple steps you can
use to get going and to contribute to the repository *without ever touching the
command line*.

There is also a [Video Walkthrough](https://www.youtube.com/embed/3CuB0wdJaSU) 
of how to do this if you prefer to learn over video.

1. [Fork the TechArch repo into your
   account](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
   
   <div align="center"><img width=400 src=https://user-images.githubusercontent.com/8604639/196454640-13428816-918b-43d1-af7b-24c54959f756.png></div>
   
   <div align="center"><img width=400 src=https://user-images.githubusercontent.com/8604639/196456303-be5ccc86-9f7b-4159-9387-2d4260333516.png></div>

2. Find the file you want to edit. [Click the pen tool on the top right of the
   file to edit it]([https://www.youtube.com/watch?v=uE2DxUfZjtE](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)). If you want to add a file, click "Add File". Click "create new branch". [Learn More](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
   
   <div align="center"><img width=400 src=https://user-images.githubusercontent.com/8604639/196453797-8cf73fee-e032-44d0-a32b-fcdf7dccf3fc.png></div>
   <div align="center"><img width=400 src=https://user-images.githubusercontent.com/8604639/196456484-ac4160a4-657d-4ef3-bca5-21ad0fa9d8e8.png></div>

3. Make your changes. When you are ready, click [Pull
   Request](https://youtu.be/rgbCcBNZcdQ?t=205) on the bar above the file. Then
   create `New Pull Request` and choose to set the request to merge to the
   `TechArch:main` branch. Put any information you want to describe your changes
   on the description, and you're done! [Learn More](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).
   
   <div align="center"><img width=400 src=https://user-images.githubusercontent.com/8604639/196454843-23080862-1f8a-4514-a3e0-59bfb9350adf.png></div>
   <div align="center"><img width=400 src=https://user-images.githubusercontent.com/8604639/196454824-a20039f9-ab87-4806-b321-891eea222438.png></div>

  
### Advanced Change Flow

As a more advanced user, there are few ways you can manage your Github
repository:

1. [You can use the github web
   editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)
2. [You can use github desktop](https://desktop.github.com/)
3. [You can use the
   cli](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)
4. Something else! Git is extremely powerful if you want to spend the time
   researching.

### Commits

- [You must sign your
  commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- Please try to keep your commit history clean. We do not enforce this but it is
  encouraged.

### Branching:

- Nobody will work directly on the `main` branch. All changes must occur over a
  PR and off the main branch.
- We encourage, but do not enforce branching naming using the following schema:
  `<type>/<description>` ex. `edit/fix-fig4-label`.
- The main-branch should always have the latest approved changes
- Custom "feature" branches may be used for special purposes, e.g. for groups to
  work on a larger section of text
- Branching will occur on forks, not over the main repository. This is to ensure
  that the main repository is not cluttered with lots of branches from contributors.
 
### Tagging

- Version tags are used for each release of the document
- Releases should be versioned and if needed, appended with a pre-release tag,
  e.g. "v1", "v3-RC1", "v4-IIW39"
- Versioning should be simple, only major releases numbered, prepended with
  letter v. e.g. v1, v2, v3.
- Branch protection rules will exist to not allow a person to directly commit to
  `main`.

### Pull Requests

The below documents some basic best practices for your pull requests.

- Please make sure to ask an editor to review your Pull Request. 
- Write descriptive and consistent names.
- Create a clear PR title and description.
- Keep PRs short as possible 
- Try to keep a transparent audit trail of your conversation so people can
  follow it.
- Avoid rewrites by getting feedback early.
- Request additional reviewers to create dialogue.
- Be precise in your comments about what needs to be fixed.

### Review

- Review of PR's is done by appointed editors. See the
  [GOVERNANCE](GOVERNANCE.md) file for more information.
- Issues labeled with `status: needs-review` should contain a PR code OR the
  change text directly in the issue (for those not Git-savvy)
- When you create an issue or a PR, please try to tag them appropriately,
  including adding a `status: needs-review` label to the issue/PR.
- Every week, the editors will go through the issues and tag them appropriately.
- If the PR is ready to be merged, it is tagged with `accepted` -label
- In normal circumstances, any editor may merge changes tagged with label
  `accepted`
- The editor can try to merge the PR to the main branch.
- If PR is not rebased and commit histories are not in sync, the PR can be
  merged if there are no overlapping changes with the history. In this case it
  is the merging editor's responsibility to ensure that the merging is clean and
  no unwanted changes happen.
- In case of change conflicts, the editor requests the PR creator to rebase
  against current main branch and resubmit the PR.
- After review, an `editor` may change the status to `status: last-call`. This
  would signal a 5 day delay for close.
- If nobody disagrees with the `status: last-call`, the issue is accepted and
  merged back into `main`.
- Sometimes the editor group may agree to a controlled merging process and
  decide that merging happens only by a selected editor (e.g. release owner) or
  during editor meetings. This may happen when a release of the document is
  coming soon and only some specific changes are allowed.

## Issues

- Anyone may raise an issue
- Every week editors will go through the new issues, and label them.
- Please provide as much clarity as possible around an issue topic. Ideally, you
are always answering the following:
   * what is the issue?
   * why is it important?
   * what would trigger closure of the ticket?
- Issues that are not commented on for over 90 days, and reviewed to not be
  relevant will be closed by an editor
- Please do not hesitate to self assign yourself if you would like to address an
  issue. 

## Labels

### Priority Labels

Priority labels are used to describe the impact and focus of the issue. Higher
priority means it is more likely to find focus within the group.

| Priority | Label | Usage |
|----------|----------|--------------------------------------------------------------------------------------------|
| priority | critical | Progress on this issue is critical to the group's forward progress. |
| priority | high | It is important for the group to resolve this issue soon. |
| priority | medium | This issue is important to resolve before the next release. |
| priority | low | This issue is "nice to have" for the next release, but could be deferred if time runs out. |

### Type Labels 

Type labels are labels the define the nature of the issue and/or the correction
itself.

| Type | Label | Usage |
|------|------------|----------------------------------------------------------------------------|
| type | editorial | The issue only involves wording and not normative content. |
| type | content | The issue involves normative content; resolution requires group consensus. |
| type | correction | The issue is fixing a recognized problem in the current version. |
| type | formatting | The issue involves fixing formatting. |
| type | figure | The issue involves a figure that it missing or needs to be revised. |
| type | admin | The issue is administrative and NOT about the deliverable. |

### Status Labels 

Status labels are labels that are used to help identify the current state of the
issue, so that we may accurately classify the work to do on it.

| Status | Label | Usage |
|--------|-------------------|-------------------------------------------------------------------------------------------------------------------|
| status | unassigned | The issue is new and has not yet been assigned to anyone. |
| status | in-progress | The issue has been assigned and work is in progress. |
| status | needs-review | A resolution (or concrete step forward) has been proposed and needs review. |
| status | blocked | Progress is currently blocked; the block should be explained in a comment. |
| status | on-hold | Progress is currently on hold; the reason should be explained in a comment. |
| status | deferred | Consensus has been reached that this issue can be deferred to a subsequent version. |
| status | abandoned | Consensus has been reached that this issue can be abandoned. |
| status | PR-needed | Consensus has been reached and this issue is now waiting for a PR to be submitted. |
| status | PR-in-progress | The issue is linked to a PR that is in progress |
| status | PR-completed | The issue is linked to a PR that is complete and waiting for review. |
| status | PR-accepted | The issue is linked to a PR that has been accepted and is waiting for merge. |
| status | PR-merged | The issue is linked to a PR that has been merged; this issue can now be closed. |
| status | status: last-call | The issue has been resolved by some other mechanism documented in the comments and is now in **5 day last call.** |
