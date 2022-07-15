# Trust over IP (ToIP) Technology Architecture Specification

#### Revision History
#### Editors:
#### Contributors:

*Copyright: *

## 1. Introduction

The mission of the Trust over IP (ToIP) Foundation is to define an overall architecture for Internet-scale digital trust that combines cryptographic assurance at the machine layers (technology) with human accountability at the business, legal, and social layers (governance). Together these two halves form a complete four-layer architecture for decentralized digital trust infrastructure known as the [ToIP stack](https://trustoverip.github.io/toip/glossary#toip-stack), illustrated in Figure 1.

<img src="/images/ToIPDualStack.jpeg" alt="ToIP Dual Stack" style="width:800px;"/>

**Figure 1: Conceptial diagram of the ToIP stack**

This document is the normative specification for the high level architecture of the ToIP technology stack (the left half of Figure 1).  It is a deliverable of the [Technology Stack Working Group](https://wiki.trustoverip.org/display/HOME/Technology+Stack+Working+Group) at the [ToIP Foundation](https://www.trustoverip.org/). It is recommended to read this document in conjunction with three other deliverables from the ToIP Foundation:

1. [Introduction to ToIP](https://www.trustoverip.org/wp-content/uploads/Introduction-to-ToIP-V2.0-2021-11-17.pdf) is our white paper that provides an overall introduction to the market needs leading to the emergence of decentralized digital trust infrastructure. It explains the origin and basic structure of the ToIP stack together with the mission and activities of the ToIP Foundation.

1. [Design Principles for the ToIP Stack](https://www.trustoverip.org/wp-content/uploads/Design-Principles-for-the-ToIP-Stack-V1.0-2022-01-17.pdf) enumerates the set of design principles informing, guiding, and constraining the design of the ToIP stack.

1. [ToIP Governance Architecture Specification](https://wiki.trustoverip.org/pages/viewpage.action?pageId=71241) defines the overall requirements for ToIP-compliant governance frameworks.

As with all ToIP deliverables, the ToIP Foundation invites your feedback and suggestions. Please contact us via any of the channels listed on the [ToIP Foundation](https://www.trustoverip.org/) website.

## 2. Terminology

In this document, the key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL", when appearing in ALL CAPITALS, are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).

All other defined terms are linked to their definitions in the applicable [ToIP glossary](https://trustoverip.github.io/toip/glossary) following the process defined by the [ToIP Concepts and Terminology Working Group](https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700).

## 3. Motivations

*This section is informative.*

The goal of this specification is to define the overall requirements for a layered system architecture that enables interoperable trust relationships between any two peers on the Internet. This is directly analogous to the role the TCP/IP stack plays in enabling interoperable data exchange between any two peers on the Internet. The design patterns applicable to solving these interoperability challenges, and the motivations for each, are detailed at length in [Design Principles for the ToIP Stack](https://trustoverip.org/permalink/Design-Principles-for-the-ToIP-Stack-V1.0-2022-11-17.pdf).

Whether from the perspective of an implementer, a customer, or a policymaker, there are many benefits to a well-defined layered architecture:

- **Engineering stability.** The abstraction of bundling technologies and policies within distinct layers isolates changes within a layer from interactions and dependencies between layers. The result is a framework more resilient to structural changes in other parts of the stack.

- **Wide adoption through a principled trust spanning layer.** Achieving universal interoperable trust relationships between any two peers on the Internet is very challenging because we have a wide range of different understandings of the meaning of trust. The example of the TCP/IP stack offers a principled design pattern based on a simple minimalistic protocol (i.e. IP) as a common spanning layer, and more diverse task specific protocols on top of this common layer (e.g. TCP for connection-oriented, UDP for connectionless). Such a principled *trust* spanning layer can maximize adoption, interoperability and reachability in a similar way.

- **Consistency.** A well-defined architecture enables the development of software components and applications that can be trusted to act in predictable, consistent ways—and that can trust other components and applications to do the same.

- **Interoperability and vendor independence.** As with the TCP/IP stack, the Bluetooth stack, the NFC stack, or other protocol stacks, implementations from multiple vendors can and should be interoperable, and customers should be able to switch between them without major loss of functionality.

- **Development communities.** As with each of the examples named above, a well-designed architecture stack helps spawn a robust, diverse community of developers building solutions whose interoperability depends on the core stack. More development attracts more customers, producing a network effect benefiting the entire ecosystem.

- **Commoditization.** Standardization of a stack for mass adoption helps turn it into a commodity, reducing both the cost of implementation and the time to market. It also frees vendors to focus on strategic differentiation in their service offerings.

- **Public policy.** A well-defined architecture with clear and concise terminology helps policymakers and legal experts define coherent policies and regulations in a manner that serves the needs of society without constraining technical innovation and competition. 

## 4. Audience and Scope

*This section is informative.*

The audience for this specification is protocol designers, system architects, software developers and product managers. The purpose of the reference architecture defined in this specification is to guide them in the development of protocols, system architectures, and software products that meet two key types of interoperability requirements:

1. **System-to-system interoperability requirements**: the architectural components and the interactions between those components necessary for interoperability of all systems acting within a ToIP digital trust ecosystem.
1. **Functional interoperability requirements**: the software functions required for each of the four layers including:
     - What each layer must do.
     - What each layer should do.
     - What behaviors are expected to support interoperability.
     - What interactions each layer supports for other layers on which it depends, or which depend on it.

Upon reading this specification, the intended audience should have a better understanding of the implications of their protocol design, system architecture, or product architecture with regard to interoperability between multiple implementations.

The scope of this specification is limited to defining the architectural requirements for each layer in the ToIP stack. The following are explicitly out-of-scope:
- The definition of specific protocols or interfaces at each layer.
- The definition of specific supporting systems or intermediary systems for any layer.
- The definition of specific test cases or interoperability profiles—including both vertical and horizontal interoperability—that can be used for test harnesses.
- The definition of applications (and their user interfaces) that run on top of the ToIP stack.
- The definition of trust frameworks or governance frameworks for usage of the ToIP stack within specific digital trust ecosystems.

The ToIP Technology Stack Working Group has committed to producing two additional documents addressing some of these needs:
1. **ToIP Interoperability Test Cases** will specify interoperability profiles that can be implemented by commercial-grade test harnesses and testing labs.
1. **ToIP Primer for Policymakers** will guide policymakers, governing authorities, analysts, and other non-technical audiences who need to deeply understand the purpose, uses, and implications of the ToIP stack but do not need (or want) to dive into technical details.

The rest of the specifications and guides necessary to develop, test, and deploy interoperable implementations of the ToIP stack are expected to be developed by the ToIP Technology Stack Working Group, other ToIP Working Groups, other standards development organizations, independent governing authorities, and independent developers.

## 5. Example Use Cases

## 6. Reference Architecture Overview

## 7. Endpoint Systems and the Layered Stack
### 7.1 Endpoint Systems
### 7.2 Layer 1 (Infrastructures)
### 7.3 Layer 2 (Trust Spanning)
### 7.4 Layer 3 (Trust Tasks)
### 7.5 Layer 4 (Applications)

## 8. The End System to End System Trust Spanning Protocol
### 8.1 Overview
### 8.2 Identifier
### 8.3 Messages
### 8.4 Routing
### 8.5 Interface to Layer 1

## 9. Supporting Systems
### 9.1 Overview
### 9.2 Example 1
### 9.3 Example 2
### 9.4 Generalization

## 10. Intermediary Systems

## 11. Endpoint System Interoperability
### 11.1 Interoperability between Endpoints with Decentralized Identifiers
### 11.2 Interoperability between Endpoints with Decentralized and Other Identifiers


## 12. Integration with the ToIP Governance Stack

## 13. References


## About the ToIP Foundation

