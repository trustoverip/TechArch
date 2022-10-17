# Tech Arch Governance Framework

* [Contributors](#contributors)
* [Maintainers](#maintainers)
* [Editors](#editors)
* [Administrators](#administrators)

## Contributors

For the protection of all Members, participation in working groups, meetings and
events is limited to members, including their employees, of the Trust over IP
Foundation who have signed the membership documents and thus agreed to the
intellectual property rules governing participation. If you or your employer are
not a member of ToIP, you may not participate in meetings by verbal contribution
or otherwise take any action beyond observing. [To join
ToIP](https://trustoverip.org/get-involved/membership/) and be able to
contribute, please fill out the light weight membership application on our
website [here](https://trustoverip.org/get-involved/membership/).

### Contributor Activities

* Asking and answering questions on the development forums
* Filing an issue
* Offering a feature or bug fix via a Pull Request
* Suggesting documentation improvements
* Improving documentation
* Self assign issues
* If appropriate, assign another group member

## Editors

* The Working Group or Task Force ("group") should appoint an Editors team who
  will take on the job of reviewing issues, assigning group members to an issue,
  and proposing when an issue is ready for closure.
* As a general rule, any one member of the Editors team can perform an action
  permitted under this role — it does not require consensus among all the
  Editors. However the Editors are trusted to use their judgement about when
  they should consult the other editors first or seek the consensus of the whole
  group.
* The members of the Editor team should be published on the group's home page
  and acknowledged in the final deliverable for their extra contribution
* Any group member should be able to assign an issue to another group member. It
  is the Editors job to try to make sure issues have assignees, and that issues
  are assigned consistently, fairly, and timely. If an assignee is not
  progressing with an issue, the Editors can re-assign it as necessary.

### Subgroups

If an issue appears to require in-depth discussion and analysis, the Editors
should assign a subgroup to tackle the issue and come back to the group with a
proposed resolution. This subgroup should:
* Keep as much of their discussion as possible within GitHub Issues — and, if
  necessary, Github Discussions. If any substantive discussions take place in
  other channels (e.g., Slack) or proposals are drafted outside of GitHub (e.g.,
  in a Google doc), they must be copied into GitHub to create a permanent public
  audit trail.
* Hold special calls/meetings if needed, but record those meetings and document
  key discussion points and decisions and copy those to GitHub.
* Develop a proposed resolution to the issue (along the lines of an ISO
  "Technical Report").
* Return with a proposal (text and diagrams) for resolution of the issue (along
  the lines of an ISO "Technical Spec"). Ideally this proposal is in a form that
  can be easily: a) turned into a PR (for a GitHub document), or b)
  copy-and-pasted as a revision to a Google doc or other format.

### Closure

* If the Editors believe an issue has been resolved via one or more PRs that
  have been accepted and merged, then one of the Editors should apply the label
  status: PR-merged and close the issue. If the Editors believe consensus has
  been achieved about some other resolution of the issue — and that resolution
  is fully documented in the issue — then one of the Editors should apply the
  label `status: last-call`.
  * Once that label has been applied, a group member MUST object to closure by
    making a comment on the issue within 5 calendar days to reopen discussion of
    the issue.
  * If there is no objection within 5 calendar days, the proposed resolution
    shall be applied to the deliverable by one of the Maintainers and one of the
    Editors shall close the issue with no further discussion.
  * If there is an objection, the Editors will take it to a group meeting to
    reach final consensus on closure.

### Editor Activities

* Labelling issues on weekly review.
* Prioritizing issues.
* Finding the appropriate `assignee` to work on an issue.
* Create issues that are required for advancement of the repository.

## Maintainers

* Maintainers have write access to GitHub repositories and act as project
  administrators. They approve and merge pull requests, cut releases, and guide
  collaboration with the community. They have:
  * Ability to merge PR's
  * Commit access to their project's repositories
* Both maintainers and non-maintainers may propose changes to source code. The
mechanism to propose such a change is a GitHub pull request. Maintainers review
and merge (land) pull requests.
* The Editors should in turn appoint a set of Maintainers who have the Github
  skills (and the necessary permissions) to accept PRs and publish versions of
  the deliverable. Typically a subset of the Editors serve as Maintainers, but
  all the Editors can serve in this role, or it can be assigned to others in the
  group.
* If a maintainer opposes a proposed change, then the change cannot land. The
  exception is if the Governance Committee ( GC) votes to approve the change
  despite the opposition. Usually, involving the GC is unnecessary.

### Maintainer activities

* Helping users and novice contributors
* Contributing code and documentation changes that improve the project
* Reviewing and commenting on issues and pull requests
* Participation in working groups
* Merging pull requests

## Administrators

* Administrators are responsible for setting repository settings and allocating
  new access controls for community. 
  
### Administrator Activities

* Setting a Github feature in the repo.
* Adding a person as a maintainer.
* Renaming the repository.
* Blocking individuals from using the respository.
* Setting security policies on the branches and repository.
* Setting any keys to the repsository.
* Integrating any new services, such as CICD to the repository.
