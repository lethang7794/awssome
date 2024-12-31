export const DVA: {
  name: string
  slug: string
  description?: string
  status?: string
  services: string
  sheets?: string[]
}[] = [
  {
    slug: '03-Cloud-Networking-TechFundamentals',
    name: 'Cloud, Networking, Tech Fundamentals',
    description:
      'OSI, Other Networking; Security, DNS/DNSSec; Container & Virtualization; Backup & Disaster Recovery (DR), JSON/YAML...',
    status: '',
    services: '',
  },
  {
    slug: '04-AWS-Fundamentals',
    name: 'AWS Fundamentals',
    description: 'Public/Private Services; HA/FT/DR; Route 53, DNS Records...',
    status: '',
    services: 'AWS Global Infrastructure; VPC, EC2, S3, CloudWatch',
  },
  {
    slug: '06-IAM-Accounts-and-AWS-Organizations',
    name: 'IAM, AWS Accounts and AWS Organizations',
    description: '',
    status: '',
    services:
      'IAM, STS, Organizations, CloudWatch, CloudTrail, Service Catalog, Identity Center (SSO), Directory Service, Control Tower; Billing & Cost Management (Cost Explorer, Budgets...)',
    sheets: ['IAM (not-working)', 'Billing & Cost Management'],
  },
  {
    slug: '07-S3',
    name: 'S3',
    description: '',
    status: '',
    services: 'S3, KMS',
  },
  {
    slug: '08-Security',
    name: 'Security',
    description: 'IAM Policy; Firewall...',
    status: '',
    services:
      'AWS Secret Manager; WAF, Shield, Network Firewall; CloudHSM; AWS Config; Inspector, GuardDuty, Macie; Trusted Advisor; Security Hub',
  },
  {
    slug: '09-VPC-Basics',
    name: 'VPC Basics',
    description:
      'VPC Design/Planning; Custom VPCs; Subnet; VPC Routing; Internet Gateway, Bastion Host; Stateless/Stateful Firewall; NACL, Security Group; NAT Gateway...',
    status: 'not-working',
    services: '',
  },
  {
    slug: '10-EC2-Basics',
    name: 'EC2 Basics',
    description:
      'EC2 Architecture; Instance types, ENI; AMI; Purchase Options...',
    status: 'partially-working',
    services:
      'EBS, EC2 Instance Connect, SSM Session Manager; Instance Metadata Service',
  },
  {
    slug: '11-Monitoring-and-Logging',
    name: 'Monitoring and Logging',
    description: '',
    status: '',
    services: 'CloudWatch Logs, CloudWatch; X-Ray; VPC Flow Logs; AWS Config',
    sheets: ['CloudWatch Logs', 'CloudWatch'],
  },
  {
    slug: '12-Containers-ECS-ECR',
    name: 'Containers, ECS, ECR',
    description: 'Containers, K8s',
    status: 'not-working',
    services: 'ECS, ECR, EKS',
  },
  {
    slug: '13-Advanced-EC2',
    name: 'Advanced EC2',
    description:
      'AMI Baking; Instance Profile; Placement Groups; Monitoring; Networking: ENA/EFA; EBS Optimized...',
    status: '',
    services: 'SSM Parameter Store; EC2 Image Builder',
    sheets: ['SSM Parameter Store'],
  },
  {
    slug: '14-Infrastructure-as-Code-and-CloudFormation',
    name: 'Infrastructure as Code, CloudFormation',
    description: '',
    status: '',
    services: 'CloudFormation',
  },
  {
    slug: '15-GlobalServiceDiscovery-ContentDelivery-Route53-CloudFront',
    name: 'Global Service Discovery, Content Delivery: Route 53, CloudFront...',
    description: '',
    status: '',
    services:
      'Route 53, CloudFront, Global Accelerator, AWS Certificate Manager',
    sheets: [
      'Route 53',
      'CloudFront',
      'Global Accelerator',
      'AWS Certificate Manager',
    ],
  },
  {
    slug: '16-Databases-SQL',
    name: 'Databases - SQL',
    description: '',
    status: '',
    services: 'RDS, Aurora; Secrets Manager; DMS, SCT',
    sheets: ['Databases', 'RDS', 'Aurora', 'Secrets Manager'],
  },
  {
    slug: '17-Network-Storage',
    name: 'Network Storage',
    description: '',
    status: 'partially-working',
    services: 'EFS, FSx',
    sheets: ['EFS', 'FSx'],
  },
  {
    slug: '18-Scaling-LoadBalancing-HighAvailability',
    name: 'Scaling, Load Balancing, High Availability',
    description:
      'AWS Global Architecture; Load balancing algorithms; Auto Scaling; Software Architecture',
    status: '',
    services:
      'Elastic Load Balancer (ELB): ALB, NLB, CLB, GWLB; Auto Scaling Group',
    sheets: [
      'Software Architecture',
      'Elastic Load Balancer',
      'Load balancing algorithms',
      'Auto Scaling Group',
    ],
  },
  {
    slug: '19-AWS-CLI-DeveloperTools-CICD',
    name: 'AWS CLI, Developer Tools, CI-CD',
    description: '',
    status: 'not-working',
    services: 'CodeCommit, CodeBuild, CodeDeploy, CodePipeline, Code*...',
  },
  {
    slug: '20-ApplicationServices-EventDriven-Serverless',
    name: 'Application Services, Event Driven, Serverless',
    description: 'Software Architecture',
    status: 'not-working',
    services:
      'Lambda; EventBridge; SNS, SQS; Step Functions; API Gateway; Kinesis; Cognito; MQ; Glue; AppFlow; SAM',
  },
  {
    slug: '24-NoSQL-Databases-DynamoDB',
    name: 'NoSQL Databases - DynamoDB',
    description: '',
    status: '',
    services: 'DynamoDB, ElastiCache, Athena, Redshift',
    sheets: ['DynamoDB'],
  },
  {
    slug: '25-Elastic-Beanstalk',
    name: 'Elastic Beanstalk',
    description: '',
    status: '',
    services: 'Elastic Beanstalk',
  },
]
