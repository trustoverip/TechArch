# Trust over IP (ToIP) Technology Architecture Specification

#### Revision History
#### Editors:
#### Contributors:

*Copyright: *

## 1. Introduction

The mission of the [Trust over IP (ToIP) Foundation](https://www.trustoverip.org) is to define an overall architecture for Internet-scale digital trust that combines cryptographic assurance at the machine layers (technology) with human accountability at the business, legal, and social layers (governance). Together these two halves form a complete four-layer architecture for decentralized digital trust infrastructure known as the [ToIP stack](https://trustoverip.github.io/toip/glossary#toip-stack). Figure 1 is a conceptual diagram of this stack:

<img src="/images/ToIPDualStack.jpeg" alt="ToIP Dual Stack" style="width:800px;"/>

**Figure 1: Conceptial diagram of the ToIP stack**

This document is the normative specification for the high-level architecture of the ToIP technology stack (the left half of Figure 1).  It is a deliverable of the [Technology Stack Working Group](https://wiki.trustoverip.org/display/HOME/Technology+Stack+Working+Group) at the ToIP Foundation. It is recommended to read this document in conjunction with these three other documents from the ToIP Foundation in the following order:

1. [Introduction to ToIP](https://www.trustoverip.org/wp-content/uploads/Introduction-to-ToIP-V2.0-2021-11-17.pdf) is our white paper that provides an overall introduction to the emergence of decentralized digital trust infrastructure. It explains the origin and basic structure of the ToIP stack together with the mission and activities of the ToIP Foundation.

1. [Evolution of the ToIP Stack](https://docs.google.com/document/d/1RKbHtqTRxlefkTTo4AgKW-Mwz631Z7Ufn0-oKqi9XxY/edit) is a companion document to this specification that explains the overall process the ToIP Foundation is following in the development of the ToIP stack. It is recommended for anyone seeking to understand how the work of the ToIP Foundation relates to that of adjacent non-profit organizations such as the Decentralized Identity Foundation, the OpenID Foundation, the Open Identity Exchange, and others including established SDOs such as W3C, IETF, ISO, etc. See [Appendix B](#appendix-b-mapping-of-existing-technologies-into-the-toip-stack) for more. 

1. [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf) is the immediate predecessor to this specification (see the development tracks described in [Section 4](#4-audience-purpose-and-scope)). It enumerates the set of design principles informing, guiding, and constraining the design of the ToIP stack. We especially recommend this document for a complete understanding of this specification.

As with all ToIP deliverables, the ToIP Foundation invites your feedback and suggestions. Please contact us via the [ToIP Foundation website](https://www.trustoverip.org/).

## 2. Terminology

In this document, the key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL", when appearing in ALL CAPITALS, are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

All other defined terms are linked to their definitions in the applicable ToIP [glossary](https://trustoverip.github.io/ctwg/glossary#glossary) following the process defined by the [ToIP Concepts and Terminology Working Group](https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700)(CTWG). The glossaries cited in this specification include:
- [The ToIP Core Glossary](https://trustoverip.github.io/toip/glossary)
- [The CTWG Glossary](https://trustoverip.github.io/ctwg/glossary)
- [The TSWG Glossary](https://trustoverip.github.io/tswg/glossary)
- [The eSSIF-Lab Glossary](https://trustoverip.github.io/essiflab/glossary)

Terms that especially vital to this specification are also explained inline.

## 3. Motivations

*This section is informative.*

The goal of this specification is to define the overall requirements for a layered system architecture that enables interoperable trust relationships between any set of endpoints on the Internet. This is directly analogous to the role the TCP/IP stack plays in enabling interoperable data exchange between any set of endpoints on the Internet. The design patterns applicable to solving these interoperability challenges, and the motivations for each, are detailed at length in [Design Principles for the ToIP Stack](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf).

Whether from the perspective of an implementer, a customer, or a policymaker, there are many benefits to a well-defined layered architecture:

- **Engineering stability.** The abstraction of bundling technologies and policies within distinct layers isolates changes within a layer from interactions and dependencies between layers. The result is a framework more resilient to structural changes than when the layers are not separated.

- **Wide adoption through a principled trust spanning layer.** The TCP/IP stack features a simple minimalistic protocol (the [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)) as a universal spanning layer. More diverse task-specific protocols are built on top of this spanning layer (e.g., TCP for connection-oriented, UDP for connectionless). In the case of ToIP, a trust spanning layer based on a well-grounded set of design principles can maximize adoption, interoperability and reachability.

- **Reliability.** A well-defined architecture enables the development of software components and applications that can be trusted to act in predictable, reliable ways—and that can expect other components and applications to do the same.

- **Interoperability and vendor independence.** As with the TCP/IP stack, the Bluetooth stack, the NFC stack, or other protocol stacks, implementations from multiple vendors can and should be interoperable, both with current standards, and as they evolve over time. Customers should be able to switch between them without major loss of functionality.

- **Development communities.** A well-designed architecture stack helps spawn a robust, diverse community of developers building solutions whose interoperability depends on a core stack. More development attracts more innovation, more innovation attracts more adoption, producing a network effect benefiting the entire ecosystem.

- **Commoditization.** Standardization of a stack for mass adoption commoditizes it, reducing both the cost of implementation and the time to market. It also frees vendors to focus on their proprietary differentiation in their service offerings.

- **Public policy.** A well-defined architecture with clear and concise terminology helps policymakers and legal experts define coherent policies and regulations in a manner that serves the needs of society without constraining technical innovation and competition. 

## 4. Audience, Purpose and Scope

*This section is informative.*

The audience for this specification is protocol designers, system architects, software developers and product managers who wish to understand, influence, design, develop, or implement interoperable decentralized digital trust infrastructure, services, or applications.

The purpose of is specification is to define a reference architecture for the technology side of the ToIP stack, including the functions and behaviors required for each of the four layers and the functional and behavioral inter-dependencies between the layers:
     - What each layer must do.
     - What each layer should and may do.
     - What behaviors are expected to support interoperability.
     - What interactions each layer supports for other layers.

The goal of these architectural requirements is to inform subsequent development tracks as summarized in Figure 2:

<img src="/images/StackDevTrack.png" alt="ToIP Stack Development Track" style="width:800px;"/>

**Figure 2: The planned progression of development tracks for the ToIP Technology Stack**

For more information about the interrelationship and progression of these four development tracks, please see Appendix B: Evolution of the ToIP Stack. 

The scope of this specification is limited to the Technical Architecture Track above, i.e., to defining the normative architectural requirements needed to guide the Component Specification Track. Success will be achieved if these requirements are sufficient to produce the component specifications needed to implement the architecture and prepare for the Interoperability Testing Track. 

By focusing solely on the Technical Architecture Track, the following are explicitly out-of-scope:

  1. The definition of specific protocols or interfaces at each layer (these will be produced in the Component Specifications Track).
  1. The definition of specific interoperability profiles and test cases—including both vertical and horizontal interoperability—that can be used for commercial-grade test harnesses and testing labs (these will be produced in the Interoperability Testing Track).
  1. The definition of specific intermediary systems or supporting systems for any layer.
  1. The definition of specific applications (and their user interfaces) that run on top of the ToIP stack.
  1. The definition of ToIP Governance Stack components such as trust frameworks or governance frameworks for usage of the ToIP stack within specific digital trust ecosystems.

*NOTE: We do not expect all of these additional deliverables, especially the component specifications, to be produced by the ToIP Technology Stack Working Group (or other ToIP Working Groups). Some have already been produced—and others are in development—by other standards development organizations (such as the Decentralized Identity Foundation, W3C, IETF, ETSI, and ISO), independent governing authorities, and independent developers.*

*NOTE: Due to the public policy implications, the ToIP Foundation is committed to producing a companion document called **ToIP Primer for Policymakers**. This document will guide policymakers, governing authorities, analysts, and other non-technical audiences who need to deeply understand the purpose, uses, and implications of the ToIP stack but do not need (or want) to dive into technical details.*


## 5. Example Use Cases

*This section is informative.*

## 6. Reference Architecture Overview

*This section is informative.*

### 6.1 Design Goals

A reference architecture of a complex system is an abstract framework consisting of a list of functional subsystems together with the interfaces and protocols needed to define the potential interactions and dependencies between these systems and/or external systems. This reference architecture provides a logical articulation of these interfaces and protocols which can then be translated into specific component specifications as described in Figure 2.


Such a reference architecture is an exercise in design guided by a set of most significant goals or principles. The overarching goals for the ToIP stack are twofold:

1. Define a general means of establishing trust between any two or more endpoint systems,
1. Achieve universal interoperability among implementations.

These twin objectives led the ToIP Foundation to begin the work with the Design Principles Track in Figure 2. In 2021, we developed a set of 17 [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf) that are the basis for the design choices reflected in this specification. For the full rationale behind each design principle, see [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf).

With regard to the first design goal, establishing trust between parties requires that each party develop confidence in the following properties of their relationship:

1. **Authenticity:** is the receiver of a communication able to verify that it originated from the expected sender?
2. **Integrity:** is the receiver able to verify that a communication is complete and has not been tampered with?
3. **Confidentiality:** is the contents of a communication protected so only authorized parties have access?
4. **Privacy:** will the expectations of each party with respect to usage of shared information be honored by the other parties?

Note that, in some trust relationships, confidentiality and privacy may be optional. Thus our design goal with the ToIP stack is to achieve these four properties in the order listed.[^1]

[^1]: Another standard information trust criteria is **availability**. This is a concern with the design and implementation of operational deployments of the ToIP stack and should be addressed in the associated operational governance frameworks.

With regard to the second design goal, the ToIP reference architecture shares the same goal of global scalability as the original Internet architecture. This involves several intertwined considerations that overlap and reinforce each other as summarized by the first four [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf):

1. The End-to-End Principle
1. Connectivity Is Its Own Reward (Universal Interoperability)
1. The Hourglass Model
1. Decentralization

### 6.2 The Four Layer Pattern

Together these considerations lead to the general *four-layer pattern* of a protocol stack summarized in Table 1.

| Leyer # | Generic Name | ToIP Name |
|---------|--------------|-----------|
| 4       | Applications | Trust Applications |
| 3       | Supported protocols | Trust Tasks |
| 2       | Spanning protocol | Trust Spanning |
| 1       | Supporting protocols | Trust Support |

**Table 1: The four layer pattern of large-scale protocol stacks**

The best-known example of this four-layer pattern is the TCP/IP Internet protocol stack, where any number of local area networking protocols at Layer 1 support a single spanning layer protocol—the IP protocol—at Layer 2. This spanning layer in turn supports multiple higher-level protocols at Layer 3 (e.g., TCP, UDP, HTTP, SMTP) designed to meet the needs of many different applications at Layer 4.

Much of the success of the Internet is attributed to this “hourglass” design in which the spanning layer protocol maximizes interoperability by providing a common way for all the higher level layers to communicate with all the lower level layers. This is why the design of the trust spanning layer should be “as simple as possible but no simpler”. Figure 3 illustrates how this same hourglass design applies to the four ToIP layers.

<img src="/images/HourGlass.png" alt="Four layer pattern in the hourglass model" style="width:500px;"/>

**Figure 3: How the four layer pattern fits the Hourglass Model**

A more detailed overview showing where different decentralized digital trust infrastructure functions fall relative to the trust spanning layer is shown in Figure 4.

<img src="/images/ExampleStack.png" alt="Examples of what falls above and below the trust spanning layer" style="width:800px;"/>

**Figure 4: Examples of what falls above and below the trust spanning layer**

### 6.3 High-Level System Architecture

The reference architecture of the ToIP stack provides a generalization of different solutions to trust establishment over the Internet (or over other digital networks). This section introduces the basic concepts, requirements and vocabulary with which to consider: a) each functional component, b) the interface definitions and protocols between these components, and c) interoperability of solutions built upon those components. Subsequent sections will describe these components and protocols in more detail.

At the highest level, ToIP interactions occur between three basic types of interacting systems.

  1. **Endpoint Systems** (often simply referred to as Endpoints): the ToIP systems between which end-to-end trust is enabled following the End-to-End Principle. See [Section 7.1](#71-endpoint-systems).
  1. **Intermediary Systems** may be used to assist in the interactions between the Endpoint Systems. In that context, Intermediary systems are involved in the ToIP Trust Spanning Protocol, and may themselves be Endpoint Systems. Intermediary systems are not a dependency to Endpoint systems' trust relationship. See [Section 9](#9-intermediary-systems).
  1. **Supporting Systems** are typically required to support the definition of Endpoints and trust establishment between Endpoint Systems. Supporting Systems that facilitate the authenticity and autonomy of an Endpoint System are termed “Privileged” Supporting Systems, others are “Unprivileged” (see [Section 10.1](#101-overview)). Supporting Systems are not directly involved in the ToIP Trust Spanning Protocol. See [Section 10](#10-supporting-systems).

The relationships between these systems is shown in Figure 5.

<img src="/images/ThreeTypesofSystems.png" alt="Three Types of Systems" style="width:600px;"/>

**Figure 5: The three basic types of component systems in ToIP architecture**

The definition of each system is anchored to its defined (and agreed) locus of control, i.e., who is able to exert control over the operation of that system. Clarity about the locus of control and the dependencies between systems is critical as end-to-end trust is constructed between any two Endpoint Systems. Each system, whether it is classified as an Endpoint System, Intermediary System or Supporting System, defines its own locus of control. An Endpoint System, for example, may be a tiny IoT device, a personal smartphone, or a large capacity service hosted in a cloud. What matters to the architecture is that it exhibits a consistent locus of control and, therefore, consistent interaction protocols with respect to other systems. 

These subsystems collaborate with each other through three types of consistent ToIP interactions:
  1. Endpoint System to Endpoint System
  1. Endpoint System to Supporting Systems
  1. Endpoint System to Intermediary Systems

ToIP Endpoint Systems and their interactions follow the 4-layer design pattern described in [Section 6.2](#62-the-four-layer-pattern). As we move up the stack (to Layers 3 and 4), the roles that may be played by an Endpoint System are often given more context-specific names. For example, at Layer 3, an Endpoint System involved in the Trust Task of exchanging [verifiable credentials](https://www.w3.org/TR/vc-data-model/) may be classified as an “Issuer”, “Holder”, or “Verifier” in that specific interaction context. These higher layer terms are specific to that context and must be consistent with the abstract general terms used in this reference architecture.

Figure 6 shows a high level view of how these three basic types of component systems might interact using the existing infrastructure of the Internet.

<img src="/images/HighLevelView.png" alt="High level view of ToIP consistent system interactions" style="width:800px;"/>

**Figure 6: High level view of ToIP consistent system interactions**

The normative requirements for each type of subsystem and interaction across the ToIP layers are specified in the following sections.

### 6.4 ToIP Identifiers

Just as IP addresses are the heart of the Internet TCP/IP stack, ToIP identifiers are the heart of the ToIP stack. Figure 7 illustrates the three basic types of ToIP identifiers.

<img src="/images/IdentifierTypes.png" alt="Three classes of identifiers" style="width:800px;"/>

**Figure 7: The three classes of identifiers used with ToIP architecture**

Design Principle #5 ([Cryptographic Verifiability](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)) states that “messages and data structures exchanged between parties should be verifiable as authentic using standard cryptographic algorithms and protocols”. This requires that Endpoint Systems be able to associate, discover and verify the cryptographic keys associated with a ToIP identifier. This specification will refer to identifiers that meet this basic requirement of cryptographic verifiability as verifiable identifiers (VIDs). 

VIDs divide into two subclasses: those that rely on centralized registries, and those that do not. An example of the former is the authority portion of an HTTPS URL. It relies on a centralized DNS registry for resolution, but that domain name is associated with an X.509 digital certificate that provides a cryptographic binding with a public key.

VIDs that do not require a centralized registry are known as decentralized identifiers or DIDs. DIDs fulfill the requirement of Design Principle #4 ([Decentralization by Design and Default](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)). The W3C has established a global standard for the syntax and resolution format of [DIDs](https://www.w3.org/TR/did-core/).

DIDs can be further subdivided into two classes: those whose verification requires the use of an external system outside of the autonomy boundary of the DID controller, and those whose verification can be accomplished using cryptography alone. The latter are often called self-certifying identifiers. Since self-certifying identifiers enable an Endpoint System to be completely autonomous, this specification will refer to this class of identifiers as autonomous identifiers (AIDs). A [KERI autonomic identifier](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf) is an example of an AID.

Requirements for ToIP identifiers are covered in [Section 8.2](#82-identifiers).

## 7. Endpoint Systems and the Layered Stack
*This section is normative.*

### 7.1 Endpoint Systems

Endpoint Systems represent ToIP systems that are under a party’s direct control. A party means the entity that is evaluating, relying on, and benefiting from a trust relationship. In other words, a party is any user of the system without regard to their role in the system. This represents a contrast with the traditional identity and access management (IAM) distinct roles of a user who is making trust assertions and a *relying party* who is relying on those assertions to make a trust decision. In a ToIP system, Endpoint Systems have a symmetric *peer-to-peer* trust relationship in Layer 2 — the trust spanning layer.

Endpoint Systems are autonomous in the sense that a party’s locus of control is fully contained within the given Endpoint System. This means a potential compromise of other Endpoint Systems, Intermediary Systems, or Supporting Systems will not directly compromise the integrity of a given Endpoint System. Each Endpoint System can be simple or very complex, i.e., it may have many further divided functions and/or services, however in this reference architecture, we shall consider the abstract Endpoint System autonomous. Implementers SHOULD ensure autonomy for Endpoint Systems [REQ A.1]

Common examples of Endpoint Systems include:

  - A mobile phone owned and administered by an individual.
  - A merchant’s web server (on-premise or in the cloud), administered by the merchant.
  - A financial institution’s distributed digital services, including certain online services for trust functions, administered by the financial institution.
  - An IoT pollution sensor device owned and administered by a city.

Befitting Design Principle #1 ([The End-to-End Principle](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf)), Endpoint Systems are the ultimate targets of the requirements of ToIP architecture. They are likely to be much larger in number — by several magnitudes — compared to Intermediary or Supporting Systems. They implement most of the functions in the ToIP architecture and represent the biggest challenge for interoperability and scalability.

<img src="/images/EndpointSystem.png" alt="Endpoint System" style="width:400px;"/>

**Figure 8: Endpoint System**

Within an Endpoint System, a higher layer uses the functions of a lower layer through an **Interface**. In ToIP architecture, functions within an Endpoint System are decomposed into layers in a vertical stack where layer boundaries are defined by their corresponding Interfaces. In a ToIP Endpoint System, the higher layers of the ToIP protocol stack MUST communicate with the lower layers via defined interfaces. [REQ A.2]

In addition to the internal layer interfaces implemented by hardware and software resources within the Endpoint System’s boundary, an Endpoint System may also rely on the services of other Supporting Systems that are located outside of the Endpoint System but accessible through the Internet to perform their functions. This type of interaction requires a defined **Protocol**. 

The distinction between an Interface and a Protocol is whether the systems communicating over the protocol represent different loci of control. For example, simply distributing the functions within a particular layer over the Internet — such as having some of the functions performed using cloud computing or web services—does not necessarily require a defined protocol if all of the functions are under the same locus of control. However an agreed protocol may be necessary if the communicating systems are under different loci of control. What is essential is delineating who has control over what in order to reason about trust relationships. 

The four layer stack within an Endpoint System is defined in the following sections.

### 7.2 Layer 1 (Infrastructures)
### 7.3 Layer 2 (Trust Spanning)
### 7.4 Layer 3 (Trust Tasks)
### 7.5 Layer 4 (Applications)

## 8. The ToIP Trust Spanning Protocol
### 8.1 Overview
### 8.2 Identifiers
### 8.3 Messages
### 8.4 Routing
### 8.5 Interface to Layer 1

## 9. Intermediary Systems

## 10. Supporting Systems
### 10.1 Overview
### 10.2 Example 1
### 10.3 Example 2
### 10.4 Generalization

## 11. Endpoint System Interoperability
### 11.1 Interoperability between Endpoints with Decentralized Identifiers
### 11.2 Interoperability between Endpoints with Decentralized and Other Identifiers


## 12. Integration with the ToIP Governance Stack

## 13. References


## About the ToIP Foundation

## Appendix A: Consolidated Requirements

## Appendix B: Mapping of Existing Technologies into the ToIP Stack

