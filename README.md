# Mind maps for AWS Certified Developer - Associate (DVA-C02)[^1]

## From which sources the content is based on?

The content is based on:

1. Cantrill courses: **DVA-C02** course[^2] (Paid course) & **Tech fundamentals** course[^3] (Free course)
2. AWS marketing pages[^4]: Why, Overview, FAQs...
3. AWS official documentation[^5]
4. And many other sources

## In which format the mind maps are created?

The mind maps are created with Xmind[^6].

Each mind map can have more than one sheets.

## How to use the mind maps?

### View the mind maps online

> [!WARNING]
> Some of the features of Xmind doesn't work, e.g. link

You can view the mind maps online with the following links:

1. [Cloud, Networking, Tech Fundamentals](https://aws-dva.vercel.app/DVA-C02/03-Cloud-Networking-TechFundamentals)

   Content: OSI, Other Networking; Security, DNS/DNSSec; Container & Virtualization; Backup & Disaster Recovery (DR), JSON/YAML...

2. [AWS Fundamentals](https://aws-dva.vercel.app/DVA-C02/04-AWS-Fundamentals)

   Content: Public/Private Services; HA/FT/DR; Route 53, DNS Records...

   Services: AWS Global Infrastructure; VPC, EC2, S3, CloudWatch

3. [IAM, AWS Accounts and AWS Organizations](https://aws-dva.vercel.app/DVA-C02/06-IAM-Accounts-and-AWS-Organizations)

   Services: IAM, STS, Organizations, CloudWatch, CloudTrail, Service Catalog, Identity Center (SSO), Directory Service, Control Tower; Billing & Cost Management (Cost Explorer, Budgets...)

   Multi sheets: IAM, Billing & Cost Management

4. [S3](https://aws-dva.vercel.app/DVA-C02/07-S3)

   Services: S3, KMS

5. [Security](https://aws-dva.vercel.app/DVA-C02/08-Security)

   Content: IAM Policy; Firewall...

   Services: AWS Secret Manager; WAF, Shield, Network Firewall; CloudHSM; AWS Config; Inspector, GuardDuty, Macie; Trusted Advisor; Security Hub

6. [VPC Basics](https://aws-dva.vercel.app/DVA-C02/09-VPC-Basics)

   Content: VPC Design/Planning; Custom VPCs; Subnet; VPC Routing; Internet Gateway, Bastion Host; Stateless/Stateful Firewall; NACL, Security Group; NAT Gateway...

7. [EC2 Basics](https://aws-dva.vercel.app/DVA-C02/10-EC2-Basics)

   Content: EC2 Architecture; Instance types, ENI; AMI; Purchase Options...

   Services: EBS, EC2 Instance Connect, SSM Session Manager; Instance Metadata Service

   Multi sheets: EBS

8. [Monitoring and Logging](https://aws-dva.vercel.app/DVA-C02/11-Monitoring-and-Logging)

   Services: CloudWatch Logs, CloudWatch; X-Ray; VPC Flow Logs; AWS Config

   Multi sheets: CloudWatch Logs, CloudWatch

9. [Containers, ECS, ECR](https://aws-dva.vercel.app/DVA-C02/12-Containers-ECS-ECR)

   Content: Containers, K8s

   Services: ECS, ECR, EKS

10. [Advanced EC2](https://aws-dva.vercel.app/DVA-C02/13-Advanced-EC2)

    Content: AMI Baking; Instance Profile; Placement Groups; Monitoring; Networking: ENA/EFA; EBS Optimized...

    Services: SSM Parameter Store; EC2 Image Builder

    Multi sheets: SSM Parameter Store

11. [Infrastructure as Code, CloudFormation](https://aws-dva.vercel.app/DVA-C02/14-Infrastructure-as-Code-and-CloudFormation)

    Services: CloudFormation

12. [Global Service Discovery, Content Delivery: Route 53, CloudFront...](https://aws-dva.vercel.app/DVA-C02/15-GlobalServiceDiscovery-ContentDelivery-Route53-CloudFront)

    Services: Route 53, CloudFront, Global Accelerator, AWS Certificate Manager

    Multi sheets: Route 53, CloudFront, Global Accelerator, AWS Certificate Manager

13. [Databases - SQL](https://aws-dva.vercel.app/DVA-C02/16-Databases-SQL)

    Services: RDS, Aurora; Secrets Manager; DMS, SCT

    Multi sheets: Databases, RDS, Aurora, Secrets Manager

14. [Network Storage](https://aws-dva.vercel.app/DVA-C02/17-Network-Storage)

    Services: EFS, FSx

    Multi sheets: EFS, FSx

15. [Scaling, Load Balancing, High Availability](https://aws-dva.vercel.app/DVA-C02/18-Scaling-LoadBalancing-HighAvailability)

    Content: AWS Global Architecture; Load balancing algorithms; Auto Scaling; Software Architecture

    Services: Elastic Load Balancer (ELB): ALB, NLB, CLB, GWLB; Auto Scaling Group

    Multi sheets: Software Architecture, Elastic Load Balancer, Load balancing algorithms, Auto Scaling Group

16. [AWS CLI, Developer Tools, CI-CD](https://aws-dva.vercel.app/DVA-C02/19-AWS-CLI-DeveloperTools-CICD)

    Services: CodeCommit, CodeBuild, CodeDeploy, CodePipeline, Code\*...

17. [Application Services, Event Driven, Serverless](https://aws-dva.vercel.app/DVA-C02/20-ApplicationServices-EventDriven-Serverless)

    Content: Software Architecture

    Services: Lambda; EventBridge; SNS, SQS; Step Functions; API Gateway; Kinesis; Cognito; MQ; Glue; AppFlow; SAM

18. [NoSQL Databases - DynamoDB](https://aws-dva.vercel.app/DVA-C02/24-NoSQL-Databases-DynamoDB)

    Services: DynamoDB, ElastiCache, Athena, Redshift

    Multi sheets: DynamoDB

19. [Elastic Beanstalk](https://aws-dva.vercel.app/DVA-C02/25-Elastic-Beanstalk)

    Services: Elastic Beanstalk

### Edit the mind maps

You can

- download the mind maps (open-source at repo (TODO: FILL IN)) to have your own copies
- then use Xmind to view and make changes to them

### Host your own mind maps

You can fork this repo and host your own mind maps online.

This is an Next.js app, so you can deploy it to Vercel, GitHub Pages...

## How to contribute

You can

- contribute to the mind maps by creating pull requests to the repo, or
- open issues in the repo to suggest changes

[^1]: <https://aws.amazon.com/certification/certified-developer-associate/>
[^2]: <https://learn.cantrill.io/p/aws-certified-developer-associate>
[^3]: <https://learn.cantrill.io/p/tech-fundamentals>
[^4]: <https://aws.amazon.com/products/>
[^5]: <https://docs.aws.amazon.com/>
[^6]: <https://xmind.app/>

## Credits

- [Next.js](https://github.com/vercel/next.js/)
- [XMind Embed Viewer](https://github.com/xmindltd/xmind-embed-viewer)

## License

This project is licensed under the terms of the MIT license.
