# certnow: Technical Stack

## Executive Summary

| Layer | Primary Choice | Rationale |
|-------|---------------|-----------|
| **Frontend** | Next.js 14 (App Router) + TypeScript | SEO, performance, luxury UX |
| **Mobile** | React Native (Expo) + NFC Manager | Cross-platform, native NFC |
| **Backend** | Node.js + GraphQL (Apollo) | Real-time, flexible API |
| **Database** | PostgreSQL + Redis + IPFS | Relational + cache + decentralized |
| **Blockchain** | Polygon PoS + Hyperledger Fabric | Hybrid: public provenance + private |
| **NFC** | NXP NTAG 424 DNA | Bank-grade security |
| **Infrastructure** | Vercel + AWS + Cloudflare | Edge, CDN, DDoS protection |

---

## Frontend Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI + Framer Motion
- **State**: Zustand + TanStack Query
- **3D/Visuals**: Three.js + React Three Fiber

---

## Backend Stack

- **Runtime**: Node.js
- **API**: GraphQL (Apollo Server)
- **Database**: PostgreSQL 15 (RDS)
- **Cache**: Redis (ElastiCache)
- **Storage**: IPFS + Pinata

---

## Blockchain

- **Public**: Polygon PoS (ERC-721A for certificates)
- **Private**: Hyperledger Fabric (brand-sensitive data)
- **Smart Contracts**: Solidity 0.8.19

---

## NFC Hardware

- **Chip**: NXP NTAG 424 DNA
- **Features**: AES-128, SUN (Secure Unique NFC), anti-cloning

---

## Development Phases

### Phase 1: MVP (Months 1-3)
- Next.js + Tailwind frontend
- Basic Node.js API
- Polygon testnet
- Manual NFC encoding

### Phase 2: Scale (Months 4-6)
- Microservices
- React Native app
- Automated NFC encoding

### Phase 3: Enterprise (Months 7-12)
- White-label portals
- AI authentication
- Cross-chain support
