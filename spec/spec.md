Trust over IP (ToIP) Technology Architecture Specification
==================

[//]: ## (Pandoc Formatting Macros)
[//]: ## (Main content {#sec:content})

**Revision History**

- Public Review Draft 02 (PR2) — 02 September 2024

For the most recent version of this specification, please see [this ToIP web page](https://trustoverip.org/our-work/technical-architecture/).

**Editors**

~ [Daniel Bachenheimer](https://www.linkedin.com/in/daniel-bachenheimer-2632202/) (Accenture)
~ [Wenjing Chu](https://www.linkedin.com/in/wenjingchu) (Futurewei Technologies, Inc)
~ [Darrell O' Donnel](https://www.linkedin.com/in/darrellodonnell/?originalSubdomain=ca) (Continuum Loop)
~ [Andor Kesselman](https://www.linkedin.com/in/henosisknot/) (Benri)
~ [Antti Kettunen](https://www.linkedin.com/in/anttikettunen/?originalSubdomain=fi)
~ [Drummond Reed](https://www.linkedin.com/in/drummondreed/) (Gen)
~ [Jo Spencer](https://www.linkedin.com/in/jospencer-1pg/?originalSubdomain=au) (460degrees / Sezoo)

**Contributors**

~ [Jacques Bikoundou]()
~ [Tim Bouma]() (CIO Strategy Council)
~ [Kevin Dean]() (GS1 Global Office)
~ [Judith Fleenor]() (Trust Over IP Foundation)
~ [Sid Haniff]() (Datasoc)
~ [Daniel Hardman]() (Provenant)
~ [Isaac Henderson]()
~ [John Jordan]() (Province of British Columbia)
~ [Vikas Malhotra]() (WOPLLI Technologies)
~ [Christine Martin]() (Continuum Loop)
~ [Sankarshan Mukhopadhyay]() (Dhiway Networks)
~ [Sumabala Nair]() (IBM)
~ [Vinod Panicker]() (Wipro)
~ [Scott Perry]() (Digital Governance Institute)
~ [Vladimir Simjanoski]() (Blokverse)
~ [P. A. Subrahmanyam]() (CyberKnowledge)
~ [Bart Suichies]()
~ [Samuel Smith]() (ProSapien LLC)
~ [Neil Thomson]() (QueryVision)
~ [Allan Thomson]()
~ [Alex Tweeddale]() (cheqd)
~ [Mattia Zago]() (Monokee)
~ [Vlad Zubenko]() (ETS)

*Copyright: 2024 Trust Over IP Foundation*

## Introduction

The mission of the [Trust over IP (ToIP) Foundation](https://www.trustoverip.org) is to define an overall architecture for Internet-scale digital trust that combines cryptographic assurance at the machine layers (technology) with human accountability at the business, legal, and social layers (governance). Together these two halves form a complete four-layer architecture for decentralized digital trust infrastructure known as the [[xref: toip, ToIP Stack]]. Figure 1 is a conceptual diagram of the basic structure of this "dual stack":

![Figure 1: ToIP Stack Basic Structure](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/toip-stack-basic-structure.png)

**Figure 1: Conceptual diagram of the ToIP stack**

The ToIP stack is a model for implementing interoperable [[xref: toip, digital trust ecosystems]]. Each ecosystem implements the elements it requires from the [[xref: toip, ToIP Technology Stack]] and publishes an [[xref: toip, ecosystem governance framework]] based on the [[xref: toip, ToIP Governance Architecture Specification]]. Figure 2 illustrates the relationship of the ToIP model with an ecosystem instance.

![Figure 2: ToIP Stack with an Ecosystem Instance](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/toip-stack-with-ecosystem-instance.png)

**Figure 2: The relationship of the ToIP model with an ecosystem instance**

Each ecosystem will have its own specific policies defined by its purpose, context, and objectives. However digital trust ecosystems do not stand alone in the digital world any more than biological ecosystems stand alone in the real world. People, businesses, and even governments operate within and across many different ecosystems. As shown in figure 3, the purpose of the ToIP model is to enable the interconnection and interoperability of many different digital trust ecosystems around the world the same way the Internet enabled the interconnection of many different local data networks around the world.

![Figure 3: The ToIP model enables interoperability of digital trust ecosystems](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/connecting-interoperable-ecosystems.png)

**Figure 3: The ToIP model enables interoperability of digital trust ecosystems**

The mission of the ToIP Foundation is two fold: 1) develop (or reference) the technical specifications required for the four layers of the ToIP Technology Stack, and 2) develop the [[xref: toip, governance framework]] models and artifacts required for the ToIP Governance Stack. Figure 4 illustrates examples of key components on both sides.

![Figure 4: A more detailed view of key components on both sides of the ToIP stack](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/toip-stack-full-detail.png)

**Figure 4: A more detailed view of key components on both sides of the ToIP stack**

This document is the normative specification for the high-level architecture of the [[xref: toip, ToIP Technology Stack]] (the left half of Figure 4).  It is a deliverable of the [Technology Stack Working Group](https://wiki.trustoverip.org/display/HOME/Technology+Stack+Working+Group) at the ToIP Foundation. It is recommended to read this document in conjunction with these other documents from the ToIP Foundation in the following order:

1. [Introduction to ToIP](https://www.trustoverip.org/wp-content/uploads/Introduction-to-ToIP-V2.0-2021-11-17.pdf) is our white paper that provides an overall introduction to the emergence of decentralized digital trust infrastructure. It explains the origin and basic structure of the [[xref: toip, ToIP stack]] together with the mission and activities of the ToIP Foundation.
2. [Evolution of the ToIP Stack](https://docs.google.com/document/d/1RKbHtqTRxlefkTTo4AgKW-Mwz631Z7Ufn0-oKqi9XxY/edit) is a companion document to this specification that explains the overall process the ToIP Foundation is following in the development of the [[xref: toip, ToIP stack]]. It is recommended for anyone seeking to understand how the work of the ToIP Foundation relates to that of adjacent non-profit organizations such as the [Decentralized Identity Foundation](http://identity.foundation/), the [OpenID Foundation](http://www.openid.net/), the [Open Wallet Foundation](https://openwallet.foundation/), and others including established SDOs such as W3C, IETF, ISO, etc. See [Appendix B](#appendix-b-mapping-of-existing-technologies-into-the-toip-stack) for more. 
3. [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf) is the immediate predecessor to this specification (see the development tracks described in [Section 4](#4-audience-purpose-and-scope)). It enumerates the set of design principles informing, guiding, and constraining the design of the [[xref: toip, ToIP stack]]. We especially recommend this document for a complete understanding of this specification.

As with all ToIP deliverables, the ToIP Foundation invites your feedback and suggestions. Please contact us via the [ToIP Foundation website](https://www.trustoverip.org/).

## Terminology

In this document, the key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL", when appearing in ALL CAPITALS, are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

All other defined terms are linked to their definitions in the [ToIP Glossary](https://trustoverip.github.io/ctwg/glossary#glossary). This glossary is maintained on behalf of all ToIP Working Groups and the wider decentralized digital trust community by the [ToIP Concepts and Terminology Working Group](https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700) (CTWG).

Terms especially important to this specification are also explained further inline.

## Motivations

*This section is informative.*

The goal of this specification is to define the overall requirements for a layered system architecture that enables interoperable [[xref: toip, trust relationships]] between any set of endpoints on the Internet. This is directly analogous to the [[xref: toip, role]] the [[xref: toip, TCP/IP]] stack plays in enabling interoperable data exchange between any set of endpoints on the Internet. The design patterns applicable to solving these interoperability challenges, and the motivations for each, are detailed at length in [Design Principles for the ToIP Stack](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf).

Whether from the perspective of an implementer, a customer, or a policymaker, there are many benefits to a well-defined layered architecture:

- **Engineering stability.** The abstraction of bundling technologies and policies within distinct layers isolates changes within a layer from interactions and dependencies between layers. The result is a framework more resilient to structural changes than when the layers are not separated.
- **Wide adoption through a principled trust spanning layer.** The [[xref: toip, TCP/IP stack]] features a simple minimalistic protocol (the [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)) as a universal [[xref: toip, spanning layer]]. More diverse task-specific protocols are built on top of this spanning layer (e.g., TCP for connection-oriented, UDP for connectionless). In the case of ToIP, a [[xref: toip, trust spanning layer]] based on a well-grounded set of design principles can maximize adoption, interoperability and reachability.
- **Reliability.** A well-defined architecture enables the development of software components and applications that can be trusted to act in predictable, reliable ways—and that can expect other components and applications to do the same.
- **Interoperability and vendor independence.** As with the [[xref: toip, TCP/IP stack]], the Bluetooth stack, the NFC stack, or other [[xref: toip, protocol stacks]], implementations from multiple vendors can and should be interoperable, and customers should be able to switch between them while maintaining standardized functionality. In addition, whenever practical, ToIP should leverage existing technologies provided they are consistent with the [ToIP design principles](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf).
- **Development communities.** A well-designed architecture stack helps spawn a robust, diverse community of developers building solutions whose interoperability depends on a core stack. More development attracts more innovation, more innovation attracts more adoption, producing a network effect benefiting the entire ecosystem.
- **Commoditization.** Standardization of a stack for mass adoption commoditizes it, reducing both the cost of implementation and the time to market. It also frees vendors to focus on their proprietary differentiation in their service offerings.
- **Public policy.** A well-defined architecture with clear and concise [[xref: toip, terminology]] helps policymakers and legal experts define coherent policies and regulations in a manner that serves the needs of society without constraining technical innovation and competition. 

## Audience, Purpose and Scope

*This section is informative.*

The audience for this specification is protocol designers, system architects, software developers and product managers who wish to understand, influence, design, develop, or implement interoperable decentralized digital trust infrastructure, services, or applications.

The purpose of is specification is to define a reference architecture for the technology side of the [[xref: toip, ToIP stack]], known formally as the [[xref: toip, ToIP Technology Stack]], including the functions and behaviors required for each of the four layers and the functional and behavioral inter-dependencies between the layers:
  - What each layer **must** do.
  - What each layer *should* and *may* do.
  - What behaviors are expected to support interoperability.
  - What interactions each layer supports for other layers.

The goal of these architectural [[xref: toip, requirements]] is to inform subsequent development stages as summarized in Figure 5:

![ToIP Development Stages](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/toip-tech-stack-dev-stages.png)

**Figure 5: The planned progression of development stages for the ToIP Technology Stack**

For more information about the interrelationship and progression of these four stages, please see this page on the ToIP website: [Evolution of the ToIP Stack](https://trustoverip.org/our-work/evolution-of-the-toip-stack/).

The scope of this specification is limited to the Technical Architecture Stage above, i.e., to defining the normative architectural requirements needed to guide the Component Specification Stage. Success will be achieved if these requirements are sufficient to produce the component specifications needed to implement the architecture and prepare for the Interoperability Testing Stage. 

By focusing solely on the Technical Architecture Stage, the following are explicitly out-of-scope:

  1. The definition of specific protocols or interfaces at each layer (these will be produced in the Component Specifications Stage).
  2. The definition of specific interoperability profiles and test cases—including both vertical and horizontal interoperability—that can be used for commercial-grade test harnesses and testing labs (these will be produced in the Interoperability Testing Stage).
  3. The definition of specific intermediary systems or supporting systems for any layer.
  4. The definition of specific applications (and their user interfaces) that run on top of the [[xref: toip, ToIP stack]].
  5. The definition of ToIP Governance Stack components such as [[xref: toip, trust frameworks]] or [[xref: toip, governance frameworks]] for usage of the ToIP stack within specific [[xref: toip, digital trust ecosystems]].

*NOTE: We do not expect all of these additional deliverables, especially the component specifications, to be produced entirely by the ToIP Technology Stack Working Group (or other ToIP Working Groups). Some of these specifications have already been produced—and others are in development—by other standards development organizations (such as the Decentralized Identity Foundation, W3C, IETF, ETSI, and ISO), independent governing authorities, and independent developers.*

*NOTE: Due to the public policy implications, the ToIP Foundation is committed to producing a companion document called **ToIP Primer for Policymakers**. This document will guide policymakers, governing authorities, analysts, and other non-technical audiences who need to deeply understand the purpose, uses, and implications of the [[xref: toip, ToIP stack]] but do not need (or want) to dive into technical details.*

## Example Use Cases

*This section is informative.*

Documenting all the example use cases for the [[xref: toip, ToIP stack]] could be as exhaustive as trying to document all the use cases for the TCP/IP stack (i.e., the Internet). Therefore the purpose of this section is simply to list a set of representative use cases that are diverse enough to illustrate the requirements driving ToIP architecture.

They are grouped into five general categories:

1. Discovery, Connection, and Authentication
2. Digital Wallets and Credentials
3. Payments and Value Exchange
4. Secure Messaging, File Sharing, and Digital Signing
5. Cross-Domain Workflows

### Discovery, Connection, and Authentication

|    Use Case   |    Capsule Description     |
|---------------|----------------------------|
| Generating and Registering a [[xref: toip, Verifiable Identifier]] (VID) | The [[xref: toip, holder]] of a [[xref: toip, digital wallet]] generates a [[xref: toip, cryptographic key pair]] and uses it to generate a [[xref: toip, VID]] either internally and/or externally via registration with a [[xref: toip, verifiable data registry]] (VDR) or [[xref: toip, witness]] of some kind. |
| Querying a [[xref: toip, trust registry]] | A [[xref: toip, holder]] or a [[xref: toip, verifier]] sends a query to a [[xref: toip, trust registry]] to determine if a specific [[xref: toip, party]] is authorized to perform a specific [[xref: toip, role]] under a specific [[xref: toip, governance framework]]. |
| Forming a New Relationship (Offline and Online) | A [[xref: toip, party]] and [[xref: toip, counterparty]] perform an [[xref: toip, out-of-band introduction]] (OOBI), such as scanning a [[xref: toip, QR code]], to exchange VIDs and establish a [[xref: toip, ToIP relationship]] between their respective [[xref: toip, ToIP endpoints]] (e.g., smartphones, cloud agents/wallets, etc.) |
| Authenticating to an Existing Relationship | A [[xref: toip, party]] who has already established a [[xref: toip, ToIP relationship]] with a [[xref: toip, counterparty]] uses that relationship to exchange one or more [[xref: toip, proofs]] of one or more [[xref: toip, authenticators]] (e.g., digital signature, liveness check) in order to establish an [[xref: toip, authentication assurance level]] (AAL) acceptable to the [[xref: toip, counterparty]]. |
| Exchanging Electronic Business Cards | A [[xref: toip, party]] and [[xref: toip, counterparty]] use a [[xref: toip, ToIP relationship]] to send each other [[xref: toip, cryptographically verifiable]] electronic business cards that can be dynamically updated by the publishing party. *Note: These are not verifiable credentials as the “holder” and “verifier” are the same [[xref: toip, party]].* |

### Digital Wallets and Credentials

|    Use Case   |    Capsule Description     |
|---------------|----------------------------|
| Obtaining and Presenting a Foundational [[xref: toip, Digital Credential]] (e.g., Government ID, Birth Certificate, Org ID) | A [[xref: toip, holder]] makes an [[xref: toip, issuance request]] (or receives an [[xref: toip, credential offer]]) to obtain a [[xref: toip, foundational credential]] from an authorized [[xref: toip, issuer]], such as a governmental agency. After performing any necessary [[xref: toip, identity proofing]] and [[xref: toip, authentication]], the [[xref: toip, issuer]] issues the credential and the [[xref: toip, holder]] accepts it into their [[xref: toip, digital wallet]]. The [[xref: toip, holder]] then receives a [[xref: toip, presentation request]] from a [[xref: toip, verifier]] who needs to verify a foundational identity. The [[xref: toip, holder]] decides whether or not to give consent to share the requested [[xref: toip, proof]], and if yes, sends the requested proof to the [[xref: toip, verifier]]. |
| Obtaining and Presenting a Functional [[xref: toip, Digital Credential]] (e.g., Employment, Diploma, Certification, Provenance, Digital Access Key) | The same use case as above, except the credential does not attest to the foundational identity of the [[xref: toip, subject]], but to other attributes, qualifications, or other [[xref: toip, verifiable data]] describing the subject. Functional credentials may serve any purpose for which a [[xref: toip, verifier]] needs verifiable data. |
| Obtaining and Presenting a Delegated [[xref: toip, Digital Credential]] | The same use case as above, except the function of the credential is for the [[xref: toip, issuer]] to [[xref: toip, delegate]] specific capabilities to the [[xref: toip, holder]]. A [[xref: toip, verifier]] requesting a [[xref: toip, delegation credential]] will typically need to verify the chain of delegation (aka the [[xref: toip, trust chain]]) to ensure that the [[xref: toip, verifier]] trusts the delegator(s). |
| Issuing and Presenting a Peer-to-Peer [[xref: toip, Digital Credential]] | The same use cases as above, except the [[xref: toip, issuers]] and [[xref: toip, verifiers]] of the credentials are not legal [[xref: toip, organizations]], but [[xref: toip, natural persons]]. |
| Presenting a [[xref: toip, Digital Credential]] Offline | The same use cases as above, except the [[xref: toip, presentation request]] from the [[xref: toip, verifier]] and the [[xref: toip, proof]] from the [[xref: toip, holder]] are exchanged offline, using a direct device-to-device protocol such as a [[xref: toip, QR code]], NFC, Bluetooth Low Energy, etc. This use case can also require the [[xref: toip, verifier]] to have an offline method of verifying credential [[xref: toip, revocation]]. |
| Revoking (and Optionally Replacing) a [[xref: toip, Digital Credential]] | The [[xref: toip, issuer]] of a credential revokes the credential by updating a [[xref: toip, revocation registry]] of some kind. The [[xref: toip, holder]] may or may not be notified of the [[xref: toip, revocation]]. If the [[xref: toip, issuer]] and the [[xref: toip, holder]] have a [[xref: toip, ToIP relationship]] (or other communications relationship), the [[xref: toip, issuer]] may offer (or the [[xref: toip, holder]]) may request a replacement credential. If the [[xref: toip, holder]] has previously given consent to the [[xref: toip, issuer]], credential replacement may also be automatic. |

### Payments & Value Exchange

|    Use Case   |    Capsule Description     |
|---------------|----------------------------|
| Paying with a Payment Credential (e.g., credit card, debit card, stored value card) | The [[xref: toip, holder]] of a [[xref: toip, digital wallet]] receives a payment request from a [[xref: toip, counterparty]] and agrees to fulfill the request by presenting a payment credential acceptable to the payee. The source and target account identifiers in this transaction may be shared with the payment processor directly, or they may be tokenized or virtualized for stronger security and privacy. |
| Transferring a Digital Currency | The [[xref: toip, holder]] of a [[xref: toip, digital wallet]] storing the [[xref: toip, cryptographic key pairs]] necessary to control a set of cryptographic tokens obtains the payment address for a [[xref: toip, counterparty]]. The [[xref: toip, holder]] instructs the wallet [[xref: toip, agent]] to transfer a specific quantity of the tokens to the [[xref: toip, counterparty]]. The wallet agent invokes a [[xref: toip, trust task protocol]] to perform a [[xref: toip, cryptographically verifiable]] transaction with the applicable [[xref: toip, distributed ledger]] in order to transfer control of the tokens to the [[xref: toip, counterparty]]. |
| Leaving a Digital Tip | The same use case as above except the value transfer from the [[xref: toip, holder]] to the [[xref: toip, counterparty]] may be in any form of payment, currency, token, or other store of value in the holder’s [[xref: toip, digital wallet]] acceptable to the [[xref: toip, counterparty]]. |
| Receiving an eReceipt | Following the value exchange in any of the use cases above, the [[xref: toip, counterparty]] issues to the [[xref: toip, holder]] a credential representing a [[xref: toip, digital receipt]] (aka e-receipt) for the transaction. |
| Buying a Digital Ticket | The same use case as above, except the e-receipt serves as an e-ticket that the [[xref: toip, holder]] can present to a [[xref: toip, verifier]], such as an event venue, to obtain access to an event. |
| Issuing a Purchase Order, Sending an Invoice, Remitting Payment | A purchaser issues a purchase order as a credential to a supplier as the [[xref: toip, holder]] of the credential. As the terms of the purchase order are fulfilled, the supplier: a) presents a [[xref: toip, proof]] of the purchase order credential back to the purchaser (or the purchaser’s payment [[xref: toip, agent]]), and b) issues an invoice credential to the purchaser as the [[xref: toip, holder]]. The purchaser then remits payment back to the supplier as described in the use cases above. |
| Bidding in a Digital Auction | The [[xref: toip, holder]] of a [[xref: toip, digital wallet]] participates as a bidder in a digital auction conducted using a [[xref: toip, trust task protocol]]. The [[xref: toip, holder]] submits each bid to the auctioneer by issuing a credential with a non-repudiable [[xref: toip, digital signature]]. The auctioneer as the [[xref: toip, holder]] of each bid credential can provide a [[xref: toip, proof]] of each bid to all bidders. Once the auction is over, the auctioneer presents a [[xref: toip, proof]] of the winning bid credential to that bidder together with a payment request. The purchaser then submits payment back to the supplier as described in the use cases above. |
| Placing a Digital Stake | The [[xref: toip, holder]] of a [[xref: toip, digital wallet]] transfers a digital currency or some other store of value (called a stake) to an intermediary (e.g., escrow service, distributed ledger, smart contract) as an incentive for the [[xref: toip, holder]] to comply with a set of rules. If the [[xref: toip, holder]] complies, the stake is preserved and—depending on the rules—the [[xref: toip, holder]] may receive a staking reward. If the [[xref: toip, holder]] does not comply, all or part of the stake is forfeited. Digital staking is a feature that can be included in [[xref: toip, trust task protocols]] as an incentive for good behavior. |

### Secure Messaging, File Sharing, & Digital Signing

|    Use Case   |    Capsule Description     |
|---------------|----------------------------|
| Sending and Receiving Secure Chat Messages (Synchronous) | A sender sends a secure, private chat message to one or more receivers with which the holder has established a [[xref: toip, ToIP relationship]]. The message is delivered via each recipient's [[xref: toip, ToIP endpoint]], so the receiver is notified according to the receiver’s preferences for that relationship and may acknowledge receipt and/or send a reply message back via that same [[xref: toip, ToIP endpoint]]. |
| Sending and Receiving Secure Mail (Asynchronous) | A sender sends a secure, private rich text message (and optional set of attachments) to one or more receivers in a specific message thread within a specific [[xref: toip, ToIP relationship]] that uses a [[xref: toip, trust task protocol]] for store-and-forward messaging. Each receiver is notified according to the receiver’s preferences for that [[xref: toip, ToIP relationship]] and may acknowledge receipt and/or send a reply message back over that same thread. |
| Sharing Confidential Documents and Files | The controller of a digital resource stored in a repository uses one of the use cases above to send a credential to an authorized [[xref: toip, party]] that authorizes that [[xref: toip, party]] to access the resource over a secure, private [[xref: toip, ToIP relationship]]. The authorized [[xref: toip, party]] presents a [[xref: toip, proof]] of the access credential to the repository and is granted access. |
| Signing and Verifying Digital Resources | A [[xref: toip, party]] sends one or more [[xref: toip, counterparties]] a request to apply a [[xref: toip, digital signature]] to one or more digital resources (e.g., documents, files, photos, videos) using any of the use cases described above. Each [[xref: toip, counterparty]] receives the signature request and uses the [[xref: toip, private key]] associated with their [[xref: toip, VID]] to digitally sign the digital resource. If the digital resource is an attachment, the [[xref: toip, counterparty]] returns the digitally signed resource to the originating [[xref: toip, party]]. If the digital resource is in a repository, the repository notifies the originating [[xref: toip, party]] of the signature event. |

### Cross-Domain Workflows

|    Use Case   |    Capsule Description     |
|---------------|----------------------------|
| Scheduling and Holding a Secure Video Conference | A meeting host sends a secure, private meeting request (and optional set of attachments) to one or more meeting attendees on a specific thread within a [[xref: toip, ToIP relationship]]. Each attendee is notified of the meeting request according to the attendee’s preferences for that [[xref: toip, ToIP relationship]] and may: a) accept, b) tentatively accept, c) decline, or d) propose an alternative time using that same thread and [[xref: toip, ToIP relationship]]. If permitted by attendees, this process of finding the optimal time for all attendees can also be automated if the attendee’s [[xref: toip, agents]] use a [[xref: toip, trust task protocol]] designed for this purpose. <br><br>Once a quorum of attendees have accepted the meeting request, the host agent sends a meeting credential to all accepted or tentative attendees that contains the [[xref: toip, service endpoint]] necessary for all attendees to join a secure, private real-time video conference. <br><br>When the meeting begins, each attendee joins by presenting a proof of the meeting credential to the meeting agent and is granted access to the meeting. |
| Making a Digital Reservation (e.g., Restaurant, Travel) | A traveler who wishes to make a reservation (airplane, rental car, hotel, restaurant) sends a reservation request to the supplier via any of the secure messaging use cases described above. The supplier confirms availability and sends back a confirmation request. The traveler applies their [[xref: toip, digital signature]] to the confirmation request to commit to the reservation and sends it back to the supplier. The supplier records the reservation and sends an access credential back to the traveler. <br><br>To access the reservation, the traveler presents a proof of the access credential to an agent (human or machine) representing the supplier. |
| Selling a Registered Vehicle | A vehicle owner lists the vehicle for sale in a marketplace using a one-time [[xref: toip, VID]] for the listing generated by the owner. This enables potential buyers to open a secure, private [[xref: toip, ToIP relationship]] to the owner’s [[xref: toip, agent]] to make an offer. If the owner desires, the agent can filter incoming offers by requesting credentials or requiring stakes from buyers to prove they are legitimate. <br><br>Once the owner accepts an offer, the owner sends an escrow request to a [[xref: toip, third party]] escrow agent. The escrow agent sends a payment request to the buyer. The buyer sends payment to the escrow agent using one of the use cases described above. Once received, the escrow agent notifies the owner. The owner delivers the vehicle to the buyer and also sends the buyer a request for the buyer's [[xref: toip, digital signature]] on a digital certificate of sale. <br><br>The buyer accepts delivery, uses the buyer’s VID to digitally sign the certificate of sale, and returns it to the seller. The buyer notifies the escrow agent of delivery; the escrow agent releases funds to the owner; and the owner delivers the vehicle keys (physical and/or digital) to the buyer. <br><br>The original owner sends a copy of the signed certificate of sale to the vehicle licensing agency. The licensing agency sends the buyer a registration payment request. The buyer sends payment to the licensing agency, and the licensing agency sends a new vehicle registration credential to the buyer. |
| Orchestrating a Data Supply Chain (“Product Passports”) | The original supplier of a product generates a VID for the product and binds it to a credential carrying the data required for the product to pass through the supply chain to the end consumer (the “product passport”). When the original supplier ships the product to the second supplier in the chain, the original supplier’s agent also sends the product passport to the [[xref: toip, agent]] for the second supplier in the [[xref: toip, trust chain]]. <br><br>The second supplier in the chain creates a second credential with the additional data required to represent their link in the supply chain. The second supplier binds the second credential to the first credential to create the second link in the trust chain. The second supplier then sends both chained credentials to the next supplier in the chain. <br><br>The process is repeated until the product reaches the end consumer. The end consumer's agent can then verify the product passport by verifing all the credentials and links in the [[xref: toip, trust chain]]. |

## Reference Architecture Overview

*This section is informative.*

### Design Goals

A reference architecture of a complex system is an abstract framework consisting of a list of functional subsystems together with the interfaces and protocols needed to define the potential interactions and dependencies between these systems and/or external systems. This reference architecture provides a logical articulation of these interfaces and protocols which can then be translated into specific component specifications as described in Figure 5.

Such a reference architecture is an exercise in design guided by a set of most significant goals or principles. The overarching goals for the ToIP stack are twofold:

1. Define a general means of establishing trust between any two or more [[xref: toip, endpoint systems]],
2. Achieve universal interoperability among implementations.

These twin objectives led the ToIP Foundation to begin the work with the Design Principles Stage in Figure 25. In 2021, we developed a set of 17 [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf) that are the basis for the design choices reflected in this specification. For the full rationale behind each design principle, please see that document.

With regard to the first design goal, establishing trust between [[xref: toip, parties]] requires that each [[xref: toip, party]] develop confidence in the following properties of their relationship:

1. **Authenticity:** is the receiver of a communication able to verify that it originated from the sender and has not been tampered with?[^1]
2. **Confidentiality:** is the contents of a communication protected so only authorized [[xref: toip, parties]] have access?
3. **Metadata Privacy:** is the metadata of a communication protected so that unauthorized parties can not collect metadata for tracking or correlating with other identifying data?[^2]

Note that, in some [[xref: toip, trust relationships]], confidentiality and metadata privacy may be optional. Thus our design goal with the [[xref: toip, ToIP stack]] is to achieve these three properties in the order listed.[^3]

[^1]: With respect to this design goal, authenticity includes **message integrity**, i.e., a communication is not authentic if it has been tampered with in any way. <br>
[^2]: In addition to confidentiaility and metadata privacy, additional notions of privacy can be built with trust tasks and applications above the trust spanning layer. <br>
[^3]: Another important property of the architecture is **availability**. This is a concern with the design and implementation of operational deployments of the ToIP stack and should be addressed in the associated operational governance frameworks.

With regard to the second design goal, the ToIP reference architecture shares the same goal of global scalability as the original Internet architecture. This involves several intertwined considerations that overlap and reinforce each other as summarized by the first four [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf):

1. The End-to-End Principle
2. Connectivity Is Its Own Reward (Universal Interoperability)
3. The Hourglass Model
4. Decentralization

### The Four Layer Pattern

Together these considerations lead to the general *four-layer pattern* of a protocol stack summarized in Table 1.

| Layer ## | Generic Hourglass Model Layer Name | ToIP Layer Name |
|---------|--------------|-----------|
| 4       | Applications | Trust Applications |
| 3       | Supported protocols | Trust Tasks |
| 2       | Spanning protocol | Trust Spanning |
| 1       | Supporting protocols | Trust Support |

**Table 1: The four layer pattern of protocol stacks that follow the Hourglass Model**

The best-known example of this four-layer pattern is the TCP/IP Internet protocol stack, where any number of local area networking protocols at Layer 1 support a single [[xref: toip, spanning layer]] protocol—the IP protocol—at Layer 2. This spanning layer in turn supports multiple higher-level protocols at Layer 3 (e.g., TCP, UDP, HTTP, SMTP) designed to meet the needs of many different applications at Layer 4.

Much of the success of the Internet is attributed to this [[xref: toip, Hourglass Model]] in which the [[xref: toip, spanning layer protocol]] maximizes interoperability by providing a common way for all the higher level layers to communicate with all the lower level layers. This is why the design of the [[xref: toip, trust spanning layer]] should be “as simple as possible but no simpler”. Figure 6 illustrates how this same hourglass design applies to the four ToIP layers.

![The four layer pattern of the Hourglass Model](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/hourglass-model.png)

**Figure 6: The four layer pattern of the Hourglass Model**

For additional overviews of how the ToIP technology stack implements the [[xref: toip, Hourglass Model]], see [Appendix B](#appendix-b-consolidated-views-of-the-toip-technology-stack).

### High-Level System Architecture

The reference architecture of the ToIP stack provides a generalization of different solutions to trust establishment over the Internet (or over other digital networks). This section introduces the basic concepts, requirements and vocabulary with which to consider: a) each functional component, b) the interface definitions and protocols between these components, and c) interoperability of solutions built upon those components. Subsequent sections will describe these components and protocols in more detail.

At the highest level, ToIP interactions occur between three basic types of interacting systems delineated by *locus of control*.

  1. **Endpoint systems** (often simply referred to as **endpoints**): the [[xref: toip, ToIP systems]] between which end-to-end trust is enabled following the End-to-End Principle. See [Section 7.1](#71-endpoint-systems).
  2. **Intermediary systems** may be used to assist in the interactions between the [[xref: toip, endpoint systems]]. In that context, intermediary systems are involved in the [[xref: toip, ToIP Trust Spanning Protocol]], and may themselves be [[xref: toip, endpoint systems]]. Intermediary systems are not a dependency to the [[xref: toip, trust relationship]] between [[xref: toip, endpoint systems]]. See [Section 9](#9-intermediary-systems).
  3. **Supporting systems** are typically required to support the definition of endpoints and [[xref: toip, trust establishment]] between [[xref: toip, endpoint systems]]. Supporting systems that facilitate the authenticity and autonomy of an [[xref: toip, endpoint system]] are termed “privileged” supporting systems, others are “unprivileged” (see [Section 10.1](#101-overview)). Supporting systems are not directly involved in the [[xref: toip, ToIP Trust Spanning Protocol]]. See [Section 10](#10-supporting-systems).

The relationships between these systems is shown in Figure 7.

![Three Types of Systems](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/ThreeTypesofSystems.png)

**Figure 7: The three basic types of component systems in ToIP architecture**

The definition of each system is anchored to its defined (and agreed) locus of control, i.e., who is able to exert control over the operation of that system. Clarity about the locus of control and the dependencies between systems is critical as end-to-end trust is constructed between any two [[xref: toip, endpoint systems]]. Each system, whether it is classified as an [[xref: toip, endpoint system]], [[xref: toip, intermediary system]] or [[xref: toip, supporting system]], defines its own locus of control. An [[xref: toip, endpoint system]], for example, may be a tiny IoT device, a personal smartphone, or a large capacity service hosted in a cloud. The terms such as 'local or remote' or 'within, internal or outside' an [[xref: toip, endpoint system]] should be understood as being with respect to its locus of control rather than physical location. What matters to the architecture is that it exhibits a consistent locus of control and, therefore, consistent interaction protocols with respect to other systems. 

These subsystems collaborate with each other through three types of consistent ToIP interactions:
  1. [[xref: toip, endpoint system]] to [[xref: toip, endpoint system]]
  2. [[xref: toip, endpoint system]] to [[xref: toip, supporting systems]]
  3. [[xref: toip, endpoint system]] to [[xref: toip, intermediary systems]]

ToIP [[xref: toip, endpoint systems]] and their interactions follow the 4-layer design pattern described in [Section 6.2](#62-the-four-layer-pattern). As we move up the stack (to Layers 3 and 4), the [[xref: toip, roles]] that may be played by an [[xref: toip, endpoint system]] are often given more context-specific names. For example, at Layer 3, an [[xref: toip, endpoint system]] involved in the [[xref: toip, trust task]] of exchanging [[xref: toip, verifiable credentials]] may be classified as an [[xref: toip, issuer]], [[xref: toip, holder]], or [[xref: toip, verifier]] in that specific interaction context. These higher layer terms are specific to that context and must be consistent with the abstract general terms used in this reference architecture.

Figure 8 shows a high level view of how these three basic types of component systems might interact using the existing infrastructure of the Internet.

![High level view of ToIP consistent system interactions](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/HighLevelView.png)

**Figure 8: High level view of ToIP consistent system interactions**

The normative requirements for each type of subsystem and interaction across the ToIP layers are specified in the following sections.

### Verifiable Identifiers

Just as IP addresses are the heart of the Internet [[xref: toip, TCP/IP stack]], [[xref: toip, cryptographically verifiable]] identifiers (VIDs) are the heart of the ToIP stack. Figure 9 illustrates a basic taxonomy of these identifiers.

![A basic taxonomy of verifiable identifier (VID) types](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/verifiable-identifier-types.png)

**Figure 9: A basic taxonomy of verifiable identifier (VID) types**

Design Principle #5 ([Cryptographic Verifiability](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)) states that “messages and data structures exchanged between parties should be verifiable as authentic using standard cryptographic algorithms and protocols”. This requires that [[xref: toip, endpoint systems]] be able to associate, discover and verify the [[xref: toip, cryptographic keys]] associated with the identifier of any other [[xref: toip, ToIP endpoint]]. This specification will refer to all such identifiers that meet this basic requirement of cryptographic verifiability as VIDs.

VIDs can be divided into two subclasses as shown in figure 9:

  1. **[[xref: toip, Self-certifying identifiers]] (SCIDs)** are cryptographically bound to the original key pair used to generate the VID and subsequent key material where key rotation is supported. This means the binding between the VID and the key material can be verified purely using cryptography—without reference to any external system. SCIDs have the advantage of being highly secure (as strong as the cryptographic algorithm used), decentralized (because no external system is required), and portable.
  1. **[[xref: toip, Externally-verified identifiers]] (XVIDs)** are generated by an interaction between the VID controller's [[xref: toip, agent]] that has access to the [[xref: toip, digital wallet]] holding the cryptographic key pair and some type of external system or authority, such as a [[xref: toip, blockchain]], [[xref: toip, distributed hash table]], or [[xref: toip, certificate authority]] (CA) that is outside of the autonomous boundary of the [[xref: toip, VID controller]]. Verification of an XVID requires the [[xref: toip, verifier]] to interact with that [[xref: toip, supporting system]].

Currently, the most common form of VID is a [[xref: toip, decentralized identifier]] (DID) as defined by the [W3C Decentralized Identifiers (DID) V1.0 Specification] TODO-REFERENCE. In general, DIDs fulfill the requirement of Design Principle #4 ([Decentralization by Design and Default](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)). The W3C DID specification defines a generic syntax for DIDs and a standard data model for a [[xref: toip, DID document]]—the artifact obtained through [[xref: toip, DID resolution]] that contains the [[xref: toip, cryptographic keys]] and [[xref: toip, service endpoints]] bound to the DID. The syntax for a specific type of DID and the process for creating, reading, updating, or deactivating the associated DID document is defined by a [[xref: toip, DID method]]. 

However, as figure 9 illustrates, there are also SCIDs and XVIDs that are not DIDs. An example of the former is an [[xref: toip, autonomic identifier]] (AID) as defined by the [[xref: toip, KERI]] specifications. An example of the latter is the authority portion of an HTTPS URL. An HTTPS URL relies on two types of [[xref: toip, supporting systems]]: 1) a CA for issuance of an X.509 digital certificate (to provide the cryptographic binding with a public key), and 2) a DNS registry (for resolution of the domain name).

Requirements for VIDs are covered in [Section 8.2](#82-identifiers).

## Endpoint systems and the Layered Stack
*This section is normative.*

### Endpoint systems

[[xref: toip, Endpoint systems]] represent ToIP systems that are under a [[xref: toip, party]]’s direct control. An [[xref: toip, endpoint system]]'s boundary is delineated by its locus of control. A [[xref: toip, party]] means the entity that is evaluating, relying on, and benefiting from a trust relationship. In other words, a [[xref: toip, party]] is any user of the system without regard to their [[xref: toip, role]] in the system. This represents a contrast with the traditional identity and access management (IAM) distinct [[xref: toip, roles]] of a user who is making trust assertions and a [[xref: toip, relying party]] who is relying on those assertions to make a [[xref: toip, trust decision]]. In a ToIP system, [[xref: toip, endpoint systems]] have a symmetric [[xref: toip, peer-to-peer]] [[xref: toip, trust relationship]] in Layer 2 — the [[xref: toip, trust spanning layer]].

[[xref: toip, Endpoint systems]] are autonomous in the sense that a party’s locus of control is the whole [[xref: toip, endpoint system]] by definition. This means a potential compromise of other [[xref: toip, endpoint systems]], [[xref: toip, intermediary systems]], or [[xref: toip, supporting systems]] will not directly compromise the integrity of a given [[xref: toip, endpoint system]]. Each [[xref: toip, endpoint system]] can be simple or very complex, i.e., it may have many further divided functions and/or services, however in this reference architecture, we shall consider the abstract [[xref: toip, endpoint system]] autonomous. Implementers SHOULD ensure autonomy for [[xref: toip, endpoint systems]] [REQ A.1]

Common examples of [[xref: toip, endpoint systems]] include:

  - A mobile phone owned and administered by an individual.
  - A merchant’s web server (on-premise or in the cloud), administered by the merchant.
  - A financial institution’s distributed digital services, including certain online services for trust functions, administered by the financial institution.
  - An IoT pollution sensor device owned and administered by a city.

Befitting Design Principle #1 ([The End-to-End Principle](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)), [[xref: toip, endpoint systems]] are the ultimate targets of the requirements of ToIP architecture. They are likely to be much larger in number — by several magnitudes — compared to [[xref: toip, intermediary systems]] or [[xref: toip, supporting systems]]. They implement most of the functions in ToIP architecture and represent the biggest challenge for interoperability and scalability.

![Endpoint system](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/EndpointSystem.png)

**Figure 10: Endpoint system**

Within an [[xref: toip, endpoint system]]'s locus of control, a higher layer uses the functions of a lower layer through an **interface**. In ToIP architecture, functions within an [[xref: toip, endpoint system]] are decomposed into layers in a vertical stack where layer boundaries are defined by their corresponding interfaces. In a ToIP [[xref: toip, endpoint system]], the higher layers of the ToIP protocol stack MUST communicate with the lower layers via defined interfaces. [REQ A.2]

In addition to the internal layer interfaces implemented by hardware and software resources within the [[xref: toip, endpoint system]]’s locus of control, an [[xref: toip, endpoint system]] may also rely on the services of other [[xref: toip, supporting systems]] that are located outside of the [[xref: toip, endpoint system]]'s locus of control but accessible through the Internet to perform their functions. This type of interaction requires a defined **protocol**. 

The distinction between an interface and a protocol is whether the systems communicating over the protocol represent different loci of control. For example, simply distributing the functions within a particular layer over the Internet — such as having some of the functions performed using cloud computing or web services—does not necessarily require a defined protocol if all of the functions are under the same locus of control. However an agreed protocol may be necessary if the communicating systems are under different loci of control. What is essential is delineating who has control over what in order to reason about [[xref: toip, trust relationships]].

The four layer stack within an [[xref: toip, endpoint system]] is defined in the following sections.

### Layer 1: Trust Support

If a ToIP [[xref: toip, endpoint system]] includes trust support functions *within its locus of control*, then those functions MUST be included at Layer 1 of the [[xref: toip, endpoint system]]. [REQ L1.1] The exact nature of the trust support functions required by any particular [[xref: toip, endpoint system]] may vary significantly depending on the endpoint system’s physical manifestation and numerous other design goals (e.g. cost, location, convenience, power usage, reliability and so on). For example the trust support functions required for a full-featured smartphone vs. a cloud server vs. an IoT thermostat may be very different. 

Examples of trust support functions designed to specifically support machine-to-machine trust (aka [[xref: toip, cryptographic trust]] or [[xref: toip, technical trust]]):

  - Cryptographic hardware modules capable of generating good quality cryptographic key materials.
  - Sufficiently secure storage of secrets and cryptographic materials.
  - Sufficiently secure computing environment.
  - Sufficient communication functions for the intended deployment environment.

*NOTE: while this specification generally assumes the Internet as the common networking environment, Internet support is not strictly required. The ToIP stack may be implemented over any communication medium capable of supporting the communication functions.*

Examples of trust support functions designed to specifically support human-to-human trust (aka business trust or legal trust) include:

  - [[xref: toip, Identity binding]] mechanisms that associate a [[xref: toip, natural person]] to the [[xref: toip, endpoint system]] itself, or to data artifacts on the [[xref: toip, endpoint system]] such as identity [[xref: toip, claims]] or [[xref: toip, verifiable credentials]]. One of the strongest identity binding mechanisms is [[xref: toip, biometrics]] — physiological or behavioral characteristics that identify the individual (e.g., facial recognition, fingerprint readers, voice recognition, palm recognition, and so on). Layer 1 would provide the hardware and software support for registering, storing, and processing biometric primitives.
  - Hardware-based trust attestation systems, such as those incorporated within [Trusted Platform Modules](https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/), and other [[xref: toip, confidential computing]] systems that can provide legally valid evidence of the security characteristics of a Layer 1 component.

Diversity of implementations of Layer 1 trust support functions is *intentional* and a key goal of the ToIP stack design.

*NOTE: For functional, performance, security, or other reasons, a Layer 1 trust support function implementation may use a remote service outside its locus of control, e.g., a distributed ledger, distributed directory, distributed database, distributed file system, or distributed hash table. These systems are [[xref: toip, supporting systems]] to the Layer 1 implementation; they are not part of Layer 1 itself. See [Section 10.1](#101-overview)*.

### Layer 2: Trust Spanning

Layer 2 is the [[xref: toip, trust spanning layer]] of the ToIP stack. In keeping with Design Principle #3 ([The Hourglass Model](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)), this means there is only one requirement for Layer 2: A ToIP [[xref: toip, endpoint system]] MUST communicate with another ToIP [[xref: toip, endpoint system]] using the [[xref: toip, ToIP Trust Spanning Protocol]]. [REQ L2.1] No other functions are required.

The requirements for the [[xref: toip, ToIP Trust Spanning Protocol]] are defined in [Section 8](#8-the-toip-trust-spanning-protocol).

### Layer 3: Trust Tasks

Many applications may require more complex trust-building functions than the minimal set offered directly by the [[xref: toip, ToIP Trust Spanning Protocol]]. When one of these functions is reusable across multiple contexts that are separated in time, space, or perspective, we call it a [[xref: toip, trust task]]. Trust tasks can be standardized as their own higher-level protocols at Layer 3 of the ToIP stack. 

A Layer 3 [[xref: toip, trust task protocol]] MUST communicate either over the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]] or over another Layer 3 [[xref: toip, trust task protocol]] for all communications related to [[xref: toip, trust establishment]] between [[xref: toip, endpoint systems]]. [REQ L3.1] This is directly analogous to how TCP and UDP communicate over IP, and how HTTP communicates over TCP. A Layer 3 [[xref: toip, trust task]] MAY use other protocols, but only for other purposes (since short-circuiting Layer 2 when establishing trust with other [[xref: toip, endpoint systems]] would undermine the trust guarantees of the ToIP stack). [REQ L3.2]

Note that because [[xref: toip, confidentiality]] and metadata privacy are optional for the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]], the following requirement applies: A Layer 3 [[xref: toip, trust task protocol]] intended to communicate private data SHOULD support confidentiality and MAY also support additional notions of privacy. [REQ L3.3]

There can be as many [[xref: toip, trust task protocol]] as are needed by Layer 4 [[xref: toip, trust applications]]. Some examples of [[xref: toip, trust tasks]] include:

  - Human authentication (as opposed to cryptographic authentication performed at Layer 2), including [[xref: toip, biometric]] authentication
  - Exchanges of [[xref: toip, verifiable credentials]] (e.g., issue, request, offer, present, revoke)
  - Provisioning, updating, and verification of [[xref: toip, digital identities]]
  - Consent management
  - Requesting and signing of digital documents
  - Secure messaging
  - Secure data sharing
  - Digital payment or value exchange in any form
  - Digital auctions
  - Digital notaries

### Layer 4: Trust Applications

Layer 4 is an open-ended application layer for any application that needs to engage in trusted interactions. Layer 4 [[xref: toip, trust applications]] MAY use any number of Layer 3 [[xref: toip, trust task protocols]. [REQ L4.1]. 

If a Layer 4 [[xref: toip, trust application]] does not use a Layer 3 [[xref: toip, trust task protocol], it MUST communicate with other [[xref: toip, endpoint systems]] using the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]]. [REQ L4.2]

Layer 4 is the layer where humans “touch” the ToIP stack, so this is where Design Principle #8 ([Trust is Human](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)) and #14 ([Trust and Technology have a Reciprocal Relationship](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)) come into play. The human experience of digital trust is so critical that Layer 4 has one more requirement: A Layer 4 [[xref: toip, trust application]] MUST support any ToIP-defined [[xref: toip, trust affordances]] relevant to that application. [REQ 4.3]

## The ToIP Trust Spanning Protocol

*This section is normative.*

### Overview

This section describes the [[xref: toip, ToIP Trust Spanning Protocol]] required at Layer 2 to communicate between any two [[xref: toip, endpoint systems]]. The overall protocol operation is shown in Figure 11 below.

![Overview of the ToIP Trust Spanning Protocol](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/SpanningProtocol.png)

**Figure 11: Overview of the ToIP Trust Spanning Protocol**

The main function of this protocol is to enable universal end-to-end communication among all [[xref: toip, endpoint systems]] using trusted messages. This architectural choice is based on the following considerations:

  - Existing Internet, local network, and mesh network infrastructure already supports universal end-to-end communication through various types of transport mechanisms.
  - This form of communication should be able to be implemented on all common types of [[xref: toip, endpoint systems]] with minimum overhead and constraints.
  - Messaging-based communication is a least common denominator that provides sufficient foundation for building more complex trust functions at higher layers.

This protocol is designed to be universal in the sense that all [[xref: toip, endpoint systems]], regardless of their form factors or implementation methods, can communicate with each other using messages incorporating standard trust guarantees.

To achieve ubiquity, this protocol should be kept as simple as possible to ease implementation challenges and allow maximum flexibility on all variants of [[xref: toip, endpoint systems]]. Thus the requirements in the following sections are not only necessary but sufficient. Strong preference must be given not to add additional functions to this protocol unless they are universally beneficial. Strong preference must also be given to a single common protocol specification for maximum any-to-any interoperability. 

A view of the ToIP protocol stack on an [[xref: toip, endpoint system]] is shown in Figure 12. The component specification for the [[xref: toip, ToIP Trust Spanning Protocol]] therefore needs to specify:
  1. How to generate and maintain identifiers with the properties described in [Section 6.4](#64-toip-identifiers).
  2. The common message format that meets the design goals described in [Section 6.1](#61-design-goals).
  3. How lower layer transport protocol(s) can be used to deliver messages between [[xref: toip, endpoint systems]].
  4. Any required support from ToIP Layer 1.

![A view of the ToIP protocol stack on an endpoint system](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/StackOnEndpoint.png)

**Figure 12: A view of the ToIP protocol stack on an [[xref: toip, endpoint system]]**

The following sections enumerate the requirements in each of these four areas.

### Identifiers

A key difference between Internet architecture and ToIP architecture is that the former only needed to identify the network endpoints of devices for data communications. The solution was Internet Protocol (IP) addresses: a global addressing scheme for network endpoints independent of any specific local area network.

By contrast, ToIP Layer 2 architecture needs to identify and route messages between the entities participating in [[xref: toip, trust relationships]]. While this set of entities may include the devices serving as [[xref: toip, endpoint systems]], it extends beyond the network to include identifiers for [[xref: toip, parties]] — people and organizations using the network to interact and transact.

In order to establish trust in the identifiers used in ToIP architecture — VIDs ([Section 6.4](#64-verifiable-identifiers)) — regardless of the type of entity to which they are bound, they must meet the following requirements:

  - A VID MUST be unique within the context in which it is used for identification. [REQ L2.2] This means VIDS intended to be globally resolvable need to be globally unique; VIDS intended to be locally resolvable need to be locally unique.

  - A VID MUST be [[xref: toip, cryptographically verifiable]], i.e., verifiably bound to at least one set of [[xref: toip, cryptographic keys]] discoverable via an associated discovery protocol. [REQ L2.3]

  - A VID SHOULD be decentralized, i.e., not require registration with a centralized authority. [REQ L2.4] 

  - A VID SHOULD be a [[xref: toip, self-certifying identifier]] (SCID), i.e., a fully portable identifier that can be verified  using cryptography alone without requiring reference to any external system or [[xref: toip, party]]. [REQ L2.5]

  - A VID SHOULD support rotation of the associated [[xref: toip, cryptographic keys]] for the lifetime of the identifier. [REQ L2.6] 

  - A VID MAY also support rotation to an entirely different VID that can be [[xref: toip, cryptographically verified]] to be a synonym of the original VID. [REQ 2.7]

  - A VID SHOULD support the ability to: a) associate the identifier with the network address of one or more [[xref: toip, ToIP systems]] that can deliver to one or more [[xref: toip, endpoint systems]] under the locus of control of the [[xref: toip, VID controller]], and b) if desired by that controller, enable that association to be discoverable. [REC L2.8]

Special considerations apply when a VID needs to be provably bound to a specific [[xref: toip, party]], i.e., a person or an organization. Proof of such a binding can be a critical factor in establishing a desired [[xref: toip, level of assurance]] in the identity of that [[xref: toip, party]]. Such proof can be accomplished using multiple mechanisms such as:

  1. Proof of control of the [[xref: toip, cryptographic keys]] bound to the VID.
  2. Proof of control of one or more [[xref: toip, verifiable credentials]] describing the identified [[xref: toip, party]].
  3. Proof of one or more [[xref: toip, biometric]] primitives describing the identified [[xref: toip, party]].

Such proofs may require support from one or more Layer 1 trust support functions within the [[xref: toip, endpoint system]], and/or support of one or more [[xref: toip, supporting systems]] outside of the [[xref: toip, endpoint system]], and/or the additional invocation of one or more Layer 3 [[xref: toip, trust task protocols]]. These steps are out-of-scope for the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]].

Different considerations apply when a VID needs to be provably bound to a digital resource, such as a file, photo, or video. This can be accomplished using VIDs that serve as [[xref: toip, content-addressable identifiers]] or [[xref: toip, self-addressing identifiers]] (SAIDs) that are derived from a [[xref: toip, cryptographic hash]] of the subject resource.

### Messages

Messages are the lingua franca of the [[xref: toip, ToIP Trust Spanning Protocol]]. To achieve the design goals in [Section 6.1](#61-design-goals), the following requirements must be met:

The [[xref: toip, ToIP Trust Spanning Protocol]] specification MUST define how to construct and format messages that are [[xref: toip, cryptographically verifiable]] to have the following three properties:

  - Authenticity: the message was sent from a sender who has control over the source VID and the contents of the message transmitted by the sender are received by the recipient who has control over the destination VID without modification.
  - Confidentiality: the contents of the message are only accessible by authorized [[xref: toip, parties]].
  - Metadata Privacy: the metadata related to the message and its transport and delivery is not exposed to unauthorized parties which may use it for tracking or unwanted correlation with other identifying data. [REC L2.9]

In a ToIP [[xref: toip, endpoint system]], an implementation of the [[xref: toip, ToIP Trust Spanning Protocol]] MUST support [[xref: toip, authenticity]]. [REQ L2.10]

In a ToIP [[xref: toip, endpoint system]], an implementation of the [[xref: toip, ToIP Trust Spanning Protocol]] MAY support [[xref: toip, confidentiality]] and metadata privacy. [REQ L2.11]

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST enable the composition of higher-level [[xref: toip, trust tasks]]. [REQ 2.12] Examples of such features include discovery, threading, timeouts, ACKs, and attachments. However this requirement must be balanced with the requirement to only add additional functions to this protocol if they are universally beneficial.

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support extensible message schema. [REQ 2.13] This enables different [[xref: toip, trust task protocols]] to be constructed without changing the base format.

### Routing

Routing of a message from a sender to a receiver proceeds in three steps as shown in Figure 8:

  1. **Address resolution** takes the VID of the receiver and resolves it to: a) the network address of an [[xref: toip, endpoint system]] for the receiver that supports the desired Layer 1 transport mechanism, and b) the associated [[xref: toip, cryptographic keys]]. For example, if the VID is a DID and the desired transport is HTTP, then a DID resolver resolves the DID following the associated DID method to retrieve the DID document. It then selects: a) the service type associated with the [[xref: toip, ToIP Trust Spanning Protocol]] and extracts an HTTP URL to which a connection can be made to deliver the message to the other [[xref: toip, endpoint system]], and b) the required [[xref: toip, cryptographic keys]].
  1. **Transport** is the Layer 1 mechanism to send the message to the [[xref: toip, endpoint system]] of the receiver or to an [[xref: toip, intermediary system]] which can eventually deliver the message. In the above example, HTTP is the transport. Over the Internet, any transport layer protocol may be a suitable transport. Other contexts may use other transports, e.g. Bluetooth, QR code, or a publish-subscribe messaging system. 
  1. **Delivery** is the final step of delivering the message to Layer 2 of the receiver’s [[xref: toip, endpoint system]]. This step may include a sub-step for an [[xref: toip, intermediary system]] ([Section 9](#9-intermediary-systems)) to deliver the message to the [[xref: toip, endpoint system]], and a second sub-step for the [[xref: toip, endpoint system]]’s Layer 1 transport to deliver the message to the Layer 2 interface.

These steps lead to the following requirements:

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support resolution of VIDs to: a) the network addresses of receiving [[xref: toip, endpoint systems]], and b) any required [[xref: toip, cryptographic keys]]. [REC 2.14]

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support transport of messages via ToIP Layer 1 interfaces. [REC 2.15]

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support delivery of messages to the Layer 2 interface of the [[xref: toip, endpoint system]] of the ultimate receiver of the message. [REC 2.16]

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support the option to deliver messages via [[xref: toip, intermediary systems]]. [REC 2.17]

The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support [[xref: toip, confidentiality]] with regard to the metadata required for message routing. [REC 2.18]

### Interface to Layer 1

Given these requirements for the [[xref: toip, ToIP Trust Spanning Protocol]] at Layer 2, the trust support function interfaces at Layer 1 should only need to include the following. Note that Layer 3 [[xref: toip, trust tasks]] or Layer 4 [[xref: toip, trust applications]] may also need to call these interfaces directly.

  1. **Key Management System (KMS)** is the interface for generating cryptographic quality keys, random numbers, or other values required by the cryptographic primitives used by the protocol.
  2. **Secure storage** is the interface through which Layer 2 can create, read, write, and delete confidential or secret data.
  3. **Transport** consists of one primitive via which the sender’s Layer 2 implementation can submit a message for transmission and another primitive through which the receiver’s Layer 1 implementation can deliver a message up to Layer 2.
  4. **User binding** is the interface via which a Layer 2 implementation can request and verify a [[xref: toip, biometric]] or other [[xref: toip, authentication]] information from a user.

## Intermediary Systems
*This section is normative.*

[[xref: toip, Intermediary systems]] are mediators for facilitating the [[xref: toip, ToIP Trust Spanning Protocol]]. Since the Internet itself is routable as long as a VID can be resolved to a unique IP address, [[xref: toip, intermediary systems]] are not absolutely required. However they can be very beneficial in other aspects.

Examples of useful [[xref: toip, intermediary systems]] include:

  - **Store and forward intermediaries.** Some [[xref: toip, endpoint systems]] are not always connected to the Internet (e.g. smartphones). As with email, effective communication between an [[xref: toip, endpoint system]] and a smartphone or similar device could use an [[xref: toip, intermediary system]] to receive and store the messages while the device is not connected. Messages are  subsequently delivered to the eventual receiver when the device becomes connected again.
  - **Multi-device intermediaries.** Individuals who use multiple computing devices (e.g., smartphone, laptop, smart watch, smart car, etc.) may choose to use an intermediary to simplify configuration and management of these devices as well as routing of messages to the appropriate device.
  - **Anonymizing intermediaries.** When confidentiality is desired in the routing of messages, intermediaries designed for this purpose can obfusticate the message routing path.
  - **Auditing intermediaries.** When auditing of message traffic is required for regulatory or compliance reasons, intermediaries designed for this purpose can maintain the necessary audit logs.

[[xref: toip, Intermediary systems]] differ from [[xref: toip, supporting systems]] because they reside between [[xref: toip, endpoint systems]] and are visible to the [[xref: toip, endpoint systems]].

![The role of intermediary systems](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/IntermediarySystems.png)

**Figure 13: The role of intermediary systems**

In Figure 13, end-to-end communication between [[xref: toip, endpoint systems]] A and B are routed through [[xref: toip, intermediary systems]] X and Y. In this case, all systems implement the Layer 2 protocol as described in [Section 8](#8-the-toip-trust-spanning-protocol). Routing uses “nested envelopes” as follows:

  1. [[xref: toip, Endpoint system]] A prepares a message for [[xref: toip, endpoint system]] B and puts it in an inner message envelope addressed to [[xref: toip, endpoint system]] B.
  2. [[xref: toip, Endpoint system]] A places the inner message envelope inside an outer message envelope addressed to [[xref: toip, intermediary system]] X.
  3. [[xref: toip, Endpoint system]] A delivers the outer message envelope to [[xref: toip, intermediary system]] X.
  4. [[xref: toip, Intermediary system]] X removes the outer message envelope and replaces it with a new outer message envelope addressed to the next hop: [[xref: toip, intermediary system]] Y.
  5. [[xref: toip, Intermediary system]] X delivers the new outer message envelope to [[xref: toip, intermediary system]] Y.
  6. [[xref: toip, Intermediary system]] Y removes the outer message envelope.
  7. [[xref: toip, Intermediary system]] Y delivers the inner message envelope to [[xref: toip, endpoint system]] B.

This pattern casts one requirement for the use of [[xref: toip, intermediary systems]]:

A ToIP [[xref: toip, intermediary system]] SHOULD be able to perform the functions of a ToIP [[xref: toip, endpoint system]] for the purpose of routing enveloped messages using the [[xref: toip, ToIP Trust Spanning Protocol]]. [REC A.3]

## Supporting Systems
*This section is normative.*

### Overview

An [[xref: toip, endpoint system]] may utilize services from any number of [[xref: toip, supporting systems]], either privileged or unprivileged, over the Internet or other networks.

  - **Privileged supporting systems** are integral to the dependent [[xref: toip, endpoint system]]’s autonomy and authenticity. A privileged [[xref: toip, supporting system]] must implement strongly qualified trust mechanisms in order to play this [[xref: toip, role]]. Such trust mechanisms can be a combination of technology (e.g. algorithmic) and governance policies (see [Section 12](#12-integration-with-the-toip-governance-stack)). For example, a blockchain is a privileged supporting system for a [[xref: toip, DID method]] whose root of trust is the blockchain.
  - **Unprivileged supporting systems** are [[xref: toip, supporting systems]] that are not required to support an [[xref: toip, endpoint system]]’s autonomy and authenticity. For example, a website that serves as a non-exclusive convenient discovery (e.g. advertising or search) mechanism for public VIDs is unprivileged.

Each type of [[xref: toip, supporting system]] may have a service access protocol standardized for the type of service it offers. There may be many such services with many different protocols. One [[xref: toip, endpoint system]] may utilize one set of [[xref: toip, supporting systems]] while another [[xref: toip, endpoint system]] may use a different set of [[xref: toip, supporting systems]]. This difference in the types of [[xref: toip, supporting systems]] used does not impede the two [[xref: toip, endpoint systems]] in interoperating through the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]]. Therefore, standardization across different services is not required. 

An example of a common protocol stack for this purpose is a defined Web Service running on top of HTTPS. However, many types of protocols may be used for different [[xref: toip, supporting systems]].

The ToIP protocol stack in an [[xref: toip, endpoint system]] MAY use the services of a [[xref: toip, supporting system]] at any layer. [REC A.4] Such design decisions can be made layer by layer to optimize the functions performed in each layer. 

The following sections illustrated the layered interaction between [[xref: toip, endpoint systems]] and [[xref: toip, supporting systems]] using examples of known implementations.

### Example 1 - A DID Method

A [[xref: toip, DID method]] may be implemented based on a distributed ledger, e.g. Hyperledger Indy. An [[xref: toip, endpoint system]], in this example, may be implemented using a Hyperledger Aries agent software module running on either a mobile device or a cloud platform. The Indy ledger is a privileged [[xref: toip, supporting system]] and the Aries agent implements layer 2 and layer 3 of the [[xref: toip, endpoint system]] stack. Such a design pattern is illustrated in Figure 14.

![An example of Hyperledger Indy as a Supporting System](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/IndyAriesExample.png)

**Figure 14: Example of Hyperledger Indy as a Supporting System**

A Layer 2 implementation must implement both [[xref: toip, DID resolution]] and the [[xref: toip, ToIP Trust Spanning Protocol]]. To implement [[xref: toip, DID resolution]] in this example, the Aries agent uses a local service (i.e. within its locus of control), i.e. a [[xref: toip, digital wallet]], which relies on, eventually, a KMS function and a secure storage function within the [[xref: toip, endpoint system]]. It also uses a remote service (i.e. outside of its locus of control) — the Indy blockchain — via web service APIs built on top of HTTPS and other web protocols. This remote service protocol consists of three components in the case of Aries-Indy: pool API, anoncred API, and payment API. The web service eventually relies on the Internet Protocol stack for routing, transport and delivery. Collectively, it is a complete [[xref: toip, endpoint system]]-to-[[xref: toip, supporting system]] protocol that in this case runs over the web.

### Example 2 - A KERI Witness

[KERI](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf) offers another example in this design pattern. In KERI, the [[xref: toip, endpoint system]] identifier is either an AID or a did:keri method. A layer 2 implementation will need certain key material and secure storage from the lower layer as well. In addition, it requires additional services that are outside of the [[xref: toip, endpoint system]]'s locus of control boundary. The [KERI Witness Pool](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf) is an example of such a supporting service as shown in Figure 15. Another example is [KERI Watcher Pool](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf). 

These supporting services differ from local dependencies (e.g. secure storage) because they are outside of an [[xref: toip, endpoint system]]’s locus of control. The access protocol to such supporting services is also different from the [[xref: toip, ToIP Trust Spanning Protocol]] as it is a protocol between different types of parties and has a different protocol stack.

![An example of a KERI witness as a Supporting System](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/KERIExample.png)

**Figure 15: Example of a KERI witness as a supporting system**

### Generalization

Figure 16 illustrates a generalization of the pattern in which [[xref: toip, endpoint systems]] and their respective [[xref: toip, supporting systems]] interact. This figure makes it clear that the interoperability between [[xref: toip, endpoint systems]] in each layer is orthogonal to the methods of interaction with respective [[xref: toip, supporting systems]].

![A generalization of how endpoint systems and supporting systems interact](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/GeneralizedSupportingSystems.png)

**Figure 16: A generalization of how endpoint systems and supporting systems interact**

## Endpoint System Interoperability

### Interoperability between Endpoint Systems Using Decentralized Identifiers

[Section 6.4](#64-toip-identifiers) states that “[[xref: toip, Endpoint systems]] [need to] be able to associate, discover and verify the cryptographic keys associated with a VID." This capability is essential in order for two or more [[xref: toip, endpoint systems]] to be able to discover and connect with each other over the [[xref: toip, ToIP Trust Spanning Protocol]].

If an [[xref: toip, endpoint system]] is identified with a publicly resolvable [[xref: toip, decentralized identifier]] (DID) as defined in [section 6.4](#64-toip-identifiers), this is straightforward because a [[xref: toip, DID resolver]] can:

1. Resolve the DID to the authoritative [[xref: toip, DID document]].
2. Extract the appropriate public key.
3. Extract the [[xref: toip, service endpoint]] URI for the [[xref: toip, ToIP Trust Spanning Protocol]].

If an [[xref: toip, endpoint system]] is identified with a private, pairwise DID — called a **peer DID** — the discovery and exchange of a [[xref: toip, DID document]] needs to use an [[xref: toip, out-of-band interaction]] (OOBI) protocol. Common examples include [[xref: toip, QR codes]] and custom-generated [[xref: toip, deep links]].

### Interoperability between Endpoints Systems Using Other Verifiable Identifiers

If an [[xref: toip, endpoint system]] is not identified with a DID, but with some other kind of VID as defined in [section 6.4](#64-toip-identifiers), then a different approach must be used to bootstrap communications using the [[xref: toip, ToIP Trust Spanning Protocol]]. This requires enabling discovery and verification of:

1. The authoritative public key for the [[xref: toip, endpoint system]].
2. The authoritative [[xref: toip, service endpoint]] URI for communicating with the [[xref: toip, endpoint system]] over the [[xref: toip, ToIP Trust Spanning Protocol]].

If the VID is an HTTPS URL, there are at least two solutions:

1. Conversion of the HTTPS URL into a **did:web:** identifier as described in the [ToIP X.509 PKD Interop page](https://wiki.trustoverip.org/display/HOME/X.509+PKD+Interop).
2. Issuance by a trusted [[xref: toip, issuer]] (such as a [[xref: toip, certification authority]]) of a [[xref: toip, verifiable credential]] whose subject is the HTTPS URL and whose claims assert the authoritative public key and [[xref: toip, ToIP Trust Spanning Protocol]] [[xref: toip, service endpoint]] URI.

We anticipate that integration of decentralized PKI and X.509 PKI will be a topic of increasing interest and innovation.

## Integration with the ToIP Governance Stack

As explained in the Introduction, this specification, maintained by the ToIP [Technology Stack Working Group](https://wiki.trustoverip.org/display/HOME/Technology+Stack+Working+Group), is focused entirely on requirements for the [[xref: toip, ToIP Technology Stack]]. A separate set of specifications, maintained by the ToIP [Governance Stack Working Group](https://wiki.trustoverip.org/display/HOME/Governance+Stack+Working+Group), defines the requirements for the [[xref: toip, ToIP Governance Stack]]. The first generation of the [[xref: toip, ToIP Governance Architecture Specification]] and related specifications were published in January 2022 and are summarized [here](https://trustoverip.org/news/2022/02/01/the-toip-foundation-releases-its-first-official-governance-specifications/).

Although the [[xref: toip, ToIP Governance Architecture Specification]] consist largely of recommendations about the structure and content of [[xref: toip, governance documents]] for ToIP-based [[xref: toip, digital trust ecosystems]], there are a very small but vital set of technical requirements that are essential for “tying the two stacks together”.

In particular, section 3 of the [ToIP Governance Architecture Specification V1.0](https://trustoverip.org/permalink/ToIP-Governance-Architecture-Specification-V1.0-2022-12-21.pdf) specifies a set of **identification requirements** for ToIP-compatible governance frameworks. A high-level summary:

1. The [[xref: toip, primary document]] for the [[xref: toip, governance framework]] MUST be assigned a DID and be retrievable via a [[xref: toip, DID URL]]. This DID identifies the [[xref: toip, governance framework]] itself as a digital object, and the [[xref: toip, DID URL]] allows it to be viewed and verified over the Web by any [[xref: toip, party]].
2. All other [[xref: toip, controlled documents]] in the [[xref: toip, governance framework]] MUST have [[xref: toip, DID URLs]].
3. The [[xref: toip, DID URLs]] for all [[xref: toip, governance framework]] documents MUST be **versioned** as the documents are versioned.
4. The [[xref: toip, governing body]], [[xref: toip, administering body]] (if separate from the [[xref: toip, governing body]]), and all [[xref: toip, governed parties]] in the [[xref: toip, governance framework]] MUST be identified with DIDs.

The use of persistent, discoverable, [[xref: toip, cryptographically verifiable]] identifiers for all parties and documents governing a [[xref: toip, digital trust ecosystem]] makes it much easier to bind technology to policy. For example:

* A [[xref: toip, verifiable credential]] issued within the ecosystem can include a [[xref: toip, claim]] asserting the DID of the authoritative [[xref: toip, governance framework]].
* The credential can also include the DID of one or more [[xref: toip, trust registries]] where a [[xref: toip, holder]] or [[xref: toip, verifier]] can verify that the DID of the credential [[xref: toip, issuer]] is authorized to issue that particular type of credential under that [[xref: toip, governance framework]].
* A credential asserting [[xref: toip, certification]] under the [[xref: toip, governance framework]] can include the DID of the [[xref: toip, governance framework]], the DID of the [[xref: toip, certification authority]], the DID of the [[xref: toip, governed party]] being certified, and the [[xref: toip, DID URL]] of the precise type of [[xref: toip, certification]] being awarded.

For additional recommendations about integration of the [[xref: toip, ToIP Governance Stack]] with the [[xref: toip, ToIP Technology Stack]], please see the [ToIP Governance Architecture Specification V1.0](https://trustoverip.org/permalink/ToIP-Governance-Architecture-Specification-V1.0-2022-12-21.pdf) and the [ToIP Governance Metamodel Specification V1.0](https://trustoverip.org/permalink/ToIP-Governance-Metamodel-Specification-V1.0-2022-12-21.pdf).

## References

*NOTE: References in this second public review draft (PR2) are currently provided inline as hyperlinks. TODO-ADD separate lists of Normative and Informative References.*

## About the ToIP Foundation

Founded in May 2020, the ToIP Foundation has grown to over 200 participating organizations plus as many more individual participants. Our mission is to define an overall architecture for Internet-scale digital trust that combines cryptographic assurance at the machine layers (technology) with human accountability at the business, legal, and social layers (governance).

For more information about ToIP Foundation, please read our [Introduction to ToIP](https://trustoverip.org/permalink/Introduction-to-ToIP-V2.0-2021-11-17.pdf) white paper or visit our website at https://trustoverip.org/.


## Appendix A: Consolidated Requirements

For ease of reference, the following table consolidates all normative requirements in this specification. Each requirement is linked to the section in which it appears.

| Req ## | Description | Section |
|---------|--------------|-----------|
| | **General ToIP Architecture Requirements**| |
| A.1       | Implementers SHOULD ensure autonomy for ToIP [[xref: toip, endpoint systems]]. | [7.1](#71-endpoint-systems) |
|A.2 | In a ToIP [[xref: toip, endpoint system]], the higher layers of the ToIP protocol stack MUST communicate with the lower layers via defined interfaces. | [7.1](#71-endpoint-systems)|
|A.3|A ToIP [[xref: toip, intermediary system]] SHOULD be able to perform the functions of a ToIP [[xref: toip, endpoint system]] for the purpose of routing enveloped messages using the [[xref: toip, ToIP Trust Spanning Protocol]].|[9](#9-intermediary-systems)|
|A.4|The ToIP protocol stack in an [[xref: toip, endpoint system]] MAY use the services of a [[xref: toip, supporting system]] at any layer.|[10.1](#101-overview)|
||**ToIP Layer 1 Requirements**| |
|L1.1|If a ToIP [[xref: toip, endpoint system]] includes trust support functions, then those functions MUST be included at Layer 1 of the [[xref: toip, endpoint system]].|[7.2](#72-layer-1-trust-support)|
| |**ToIP Layer 2 Requirements**| |
|L2.1|A ToIP [[xref: toip, endpoint system]] MUST communicate with another ToIP [[xref: toip, endpoint system]] using the [[xref: toip, ToIP Trust Spanning Protocol]].|[7.3](#73-layer-2-trust-spanning)|
|L2.2|A [[xref: toip, VID]] MUST be unique within the context in which it is used for identification.|[8.2](#82-identifiers)|
|L2.3|A [[xref: toip, VID]] MUST be [[xref: toip, cryptographically verifiable]], i.e., verifiably bound to at least one set of [[xref: toip, cryptographic keys]] discoverable via an associated discovery protocol.|[8.2](#82-identifiers)|
|L2.4|A [[xref: toip, VID]] SHOULD be decentralized, i.e., not require registration with a centralized authority.|[8.2](#82-identifiers)|
|L2.5|A [[xref: toip, VID]] SHOULD be a [[xref: toip, self-certifying identifier]] (SCID), i.e., a fully portable identifier that can be verified  using cryptography alone without requiring reference to any external system or [[xref: toip, party]].|[8.2](#82-identifiers)|
|L2.6|A [[xref: toip, VID]] SHOULD support rotation of the associated [[xref: toip, cryptographic keys]] for the lifetime of the identifier.|[8.2](#82-identifiers)|
|L2.7|A [[xref: toip, VID]] MAY also support rotation to an entirely different VID that can be cryptographically verified to be a synonym of the original VID.|[8.2](#82-identifiers)|
|L2.8|A [[xref: toip, VID]] SHOULD support the ability to: a) associate the VID with the network address of one or more [[xref: toip, ToIP systems]] that can deliver to one or more [[xref: toip, endpoint systems]] under the locus of control of the [[xref: toip, VID controller]], and, b) if desired by the controller, enable that association to be discoverable.|[8.2](#82-identifiers)|
|L2.9|The [[xref: toip, ToIP Trust Spanning Protocol]] specification MUST define how to construct and format messages that are [[xref: toip, cryptographically verifiable]] to have the following three properties: (1) [[xref: toip, Authenticity]]: the message was sent from a sender who has control over the source VID and the contents of the message transmitted by the sender are received by the intended recipient who has control over the destination VID without modification. (2) [[xref: toip, Confidentiality]]: the contents of the message are only accessible by authorized [[xref: toip, parties]]. (3) Metadata Privacy: the metadata related to the message and its transport and delivery is not exposed to unauthorized parties which may use it for tracking or unwanted correlation with other identifying data.|[8.3](#83-messages)|
|L2.10|In a ToIP [[xref: toip, endpoint system]], an implementation of the [[xref: toip, ToIP Trust Spanning Protocol]] MUST support [[xref: toip, authenticity]].|[8.3](#83-messages)|
|L2.11|In a ToIP [[xref: toip, endpoint system]], an implementation of the [[xref: toip, ToIP Trust Spanning Protocol]] MAY support [[xref: toip, confidentiality]] and metadata privacy.|[8.3](#83-messages)|
|L2.12|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST enable the composition of higher-level [[xref: toip, trust task protocols]].|[8.3](#83-messages)|
|L2.13|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support extensible message schema.|[8.3](#83-messages)|
|L2.14|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support resolution of VIDs to: a) the network addresses of receiving [[xref: toip, endpoint systems]], and b) any required [[xref: toip, cryptographic keys]].|[8.4](#84-routing)|
|L2.15|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support transport of messages via ToIP Layer 1 interfaces.|[8.4](#84-routing)|
|L2.16|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support delivery of messages to the Layer 2 interface of the [[xref: toip, endpoint system]] of the ultimate receiver of the message.|[8.4](#84-routing)|
|L2.17|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support delivery of messages via [[xref: toip, intermediary systems]].|[8.4](#84-routing)|
|L2.18|The [[xref: toip, ToIP Trust Spanning Protocol]] MUST support [[xref: toip, confidentiality]] with regard to the metadata required for message routing.|[8.4](#84-routing)|
| |**ToIP Layer 3 Requirements**| |
|L3.1|A Layer 3 [[xref: toip, trust task protocol]] MUST communicate either over the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]] or over another Layer 3 Trust Task Protocol for all communications related to trust establishment between [[xref: toip, endpoint systems]].|[7.4](#74-layer-3-trust-tasks)|
|L3.2|A Layer 3 [[xref: toip, trust task]] MAY use other protocols, but only for other purposes (since short-circuiting Layer 2 when establishing trust with other [[xref: toip, endpoint systems]] would undermine the trust guarantees of the ToIP stack).|[7.4](#74-layer-3-trust-tasks)|
|L3.3|A Layer 3 [[xref: toip, trust task protocol]] intended to communicate private data SHOULD support [[xref: toip, confidentiality]] and MAY also support additional notions of privacy.|[7.4](#74-layer-3-trust-tasks)|
| |**ToIP Layer 4 Requirements**| |
|L4.1|Layer 4 [[xref: toip, trust applications]] MAY use any number of Layer 3 [[xref: toip, trust task protocols]].|[7.5](#75-layer-4-trust-applications)|
|L4.2|If a Layer 4 [[xref: toip, trust application]] does not use a Layer 3 [[xref: toip, trust task protocol]], it MUST communicate with other [[xref: toip, endpoint systems]] using the Layer 2 [[xref: toip, ToIP Trust Spanning Protocol]].|[7.5](#75-layer-4-trust-applications)|
|L4.3|A Layer 4 [[xref: toip, trust application]] MUST support any ToIP-defined [[xref: toip, trust affordances]] relevant to that application.|[7.5](#75-layer-4-trust-applications)|

## Appendix B: Consolidated Views of the ToIP Technology Stack

The ToIP Technology Architecture Task Force has spent many hours discussing how to produce consolidated views of ToIP architecture that are both relatively easy to understand but still technically accurate. In the end, we agreed no single diagram is sufficient. Rather, different views of the architecture should be taken together to see the whole picture. In this appendix we present several of these views — and [we invite feedback](https://trustoverip.org/our-work/technical-architecture/) on others that might be helpful.

### Functional Hourglass View

Figure B1 is a view of the types of functions that belong at each layer within a single [[xref: toip, endpoint system]] as defined in this specification. It illustrates how the [[xref: toip, Hourglass Model]] is implemented as a single [[xref: toip, trust spanning protocol]] at Layer 2, with multiple trust support functions below and multiple supported [[xref: toip, trust task protocols]] above. It also shows one example (at the far right) of a specific category of [[xref: toip, supporting systems]], in this case [[xref: toip, verifiable data registries]] (VDRs) upon which an [[xref: toip, endpoint system]] can rely as external sources of truth.

![A layer-by-layer view of functions within an endpoint system](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/functional-hourglass-view.png)

**Figure B1: A layer-by-layer view of functions within an endpoint system (also showing verifiable data registries as one type of adjacent supporting system)**

### Sphere-of-Influence View

Figure B2 builds on Figure B1 by identifying those technical capabilities that fall within the purview of ToIP’s technical architecture and those that are outside that boundary and thus do not need to be governed by ToIP component specifications.

![A view of the ToIP Technology Stack that shows what is inside and outside ToIP's 'sphere of influence'](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/sphere-of-influence-view.png)

**Figure B2: A view of the ToIP Technology Stack that shows what is inside and outside ToIP's "sphere of influence"**

This view shows how the logical capabilities and components identified in the functional Hourglass View can align with dependent solutions that are not governed by ToIP’s requirements. For example, a [[xref: toip, DID resolver]] functioning at Layer 2 in an [[xref: toip, endpoint system]] may call a DID ledger functioning as a [[xref: toip, verifiable data registry]]. While the [[xref: toip, DID resolver]] interface is a ToIP Layer 2 function, the DID ledger called by the associated [[xref: toip, DID method]] is a [[xref: toip, supporting system]] that has its own resolution protocol as defined by the [[xref: toip, DID method]].

### Interaction Pattern View

Figure B3 builds on B1 and B2 by showing the interaction patterns between two different [[xref: toip, endpoint systems]] as well as between an [[xref: toip, endpoint system]] and a set of [[xref: toip, supporting systems]] (on the far right).

![A layer-by-layer view of functions within an [[xref: toip, endpoint system]]](https://raw.githubusercontent.com/trustoverip/TechArch/refs/heads/main/images/interaction-pattern-view.png)

**Figure B3: A view showing the interaction patterns both within and between two endpoint systems (as well as with supporting systems on the far right)**

## Appendix C: Mapping of Existing Technologies into the ToIP Technology Stack

Just as the TCP/IP stack did not need to reinvent or replace existing local area networks, but instead added a new inter-networking layer to connect them, the ToIP stack does not reinvent or replace existing centralized or federated identity systems and PKI trust infrastructures. The ToIP stack adds a new inter-_trust_ networking layer to connect the existing trust domains.

As this new layer of decentralized digital identity and trust infrastructure has been evolving, many individual pieces of the puzzle have been developed in parallel. For example:

* Almost 200 different DID methods (see the [W3C DID Spec Registries](https://www.w3.org/TR/did-spec-registries/)).
* At least a dozen different digital credential formats and signature schemes.
* At least three digital credential exchange protocols (DIDComm/Aries, OIDC4VC, W3C VC API)
* Several new decentralized payment protocols (e.g., [TBDex](https://tbdex.io/whitepaper.pdf)).
* Multiple [[xref: toip, QR code]] formats and [[xref: toip, out-of-band introduction]] (OOBI) protocols (e.g., [OASIS Secure QR Codes](https://www.oasis-open.org/2022/07/12/secure-qr-code-authentication-v1-0-from-esat-tc-approved-as-a-committee-specification/)).

From the perspective of the ToIP stack, all of these are potential component specifications.

* Some may fully meet the requirements of this [[xref: toip, ToIP Technology Architecture Specification]] without any modification. 
* Others may require ToIP-conformant profiles to be written.
* Still others may require (hopefully small) revisions to meet ToIP requirements.
* A few (ideally very few) may need to be developed from scratch, either at the ToIP Foundation or another suitable industry organization. Two examples are the [[xref: toip, ToIP Trust Spanning Protocol]] and the [[xref: toip, ToIP Trust Registry Query Protocol]].

Given the speed at which this new evolutionary branch of the Internet is evolving, the ToIP Foundation is maintaining a “mapping” of existing technologies and open standards into the ToIP stack on a web page called [Evolution of the ToIP Stack](https://trustoverip.org/our-work/evolution-of-the-toip-stack/). 

We  recommend referring to this page to see the current mapping. The Foundation intends to publish an updated version of this document with each major development in the space.
