**Planejamento DevOps — Aplicação de Reserva de Passagens Aéreas (MVP)**

1. **Visão e Contexto**

- Aplicação para busca de passagens aéreas.
- O usuário informa data, hora, origem e destino, e recebe a passagem de menor custo.
- Problema resolvido: reduzir tempo e complexidade de pesquisa, automatizar comparação de tarifas.

2. **Objetivos e Escopo**

- Objetivos do MVP:
  - Permitir consulta de passagens em <4 segundos.
  - Integrar com no mínimo 3 agências.
  - Retornar sempre a passagem de menor custo.
  - Interface simples, mobile-friendly.
- Escopo: MVP com busca de passagens e exibição da melhor tarifa. Sem login e sem funcionalidades secundárias.

3. **Stakeholders e Usuários**

- Stakeholders: Produto, Engenharia/Desenvolvimento, QA, Arquitetura, SRE/DevOps.
- Parceiros: Agências aéreas (APIs), AWS (infraestrutura).
- Usuários: Consumidores finais com pouco tempo, baixa habilidade técnica e sensíveis a preço.

4. **Requisitos Funcionais**

- Campo para origem, destino, data e hora.
- Botão de busca.
- Exibir passagem mais barata com companhia, horário, duração.
- Normalizar parâmetros para APIs das agências.
- Tratar erros e timeouts.
- Consolidar e comparar tarifas, retornando sempre a menor.
- Registrar logs e aplicar cache de resultados.

5. **Requisitos Não Funcionais**

- SLA <4s (total frontend + backend) mesmo sob carga de ~5.000 consultas/dia.
- Disponibilidade 99%, operação 24/7, manutenção das 02h às 04h.
- Latência, taxa de erro, throughput, cache hit rate e disponibilidade monitorados.
- Retenção logs: aplicação/acesso/traces = 7 dias; auditoria = 90 dias.
- Observabilidade via CloudWatch + OpenTelemetry/X-Ray; alertas: Slack / PagerDuty / E-mail.
- LGPD: mascaramento PII, acesso restrito, logs seguros.

6. **Riscos e Restrições**

- Dependência de APIs das agências: alta probabilidade, alto impacto, mitigação com timeout, failover, circuit breaker e cache.
- Mudanças nos contratos das agências: média probabilidade, alto impacto, mitigação com monitoramento e fallback.
- Picos de tráfego: média probabilidade, médio impacto, mitigação com Auto Scaling, HPA, cache.
- Exposição de PII: baixa probabilidade, alto impacto, mitigação com masking, IAM, retenção e criptografia.
- Falha em região AWS: baixa probabilidade, médio impacto, mitigação Multi-AZ e backups cross-region.
- Alto custo integração: média probabilidade, médio impacto, mitigação com cache e throttling.

7. **Arquitetura e Integrações**

- Backend: containerizado em EKS, Next.js fullstack.
- Banco de dados: RDS Postgres Multi-AZ + Redis/ElastiCache.
- Integração: APIs REST/JSON das agências, timeout 1.2s, failover, circuit breaker.
- Ingress & TLS: ALB + ACM + WAF básico.
- Observabilidade: logs Fluent Bit → CloudWatch, traces X-Ray/OpenTelemetry.
- Segurança: IRSA + Secrets Manager, NetworkPolicies, PDB, rolling updates.

8. **Infraestrutura e DevOps**

- Multi-AZ, Auto Scaling horizontal.
- Managed Node Groups EC2 + Spot + On-demand fallback.
- Pods: requests 250m CPU / 512Mi RAM, limits 500m CPU / 1Gi RAM.
- Logs, métricas, alertas configurados.
- Service mesh não utilizado no MVP.

9. **Estratégia de CI/CD**

- Pipeline única: build → testes unitários → deploy.
- Imagens containerizadas para ECR com scan on push.
- Deploy automático em dev/staging, manual em produção.
- Segredos via AWS Secrets Manager, rollback automático em falha de health check.
- Rolling update como estratégia de deploy.

10. **Épicos e Roadmap**

- Épicos MVP: Busca de passagens, Integração com agências, Interface do usuário, Cache e performance, Observabilidade e logs.
- User Stories: informar origem/destino/data → busca, exibir passagem mais barata, integração com APIs, registrar logs, aplicar cache.
- Roadmap: Sprint 1: setup EKS, CI/CD, dev/staging; Sprint 2: backend + 1 agência + testes unitários; Sprint 3: frontend + busca + cache; Sprint 4: integração completa, observabilidade, deploy produção.
- Critérios de aceite / DoD: funcionalidade implementada e testada unitariamente, integração dentro do SLA, logs e métricas disponíveis, deploy validado em dev/staging.
