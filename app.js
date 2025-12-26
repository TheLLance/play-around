const { createApp } = Vue;

createApp({
  data() {
    return {
      metrics: [
        { label: 'Infrastructure uptime', value: '99.99%' },
        { label: 'Average response SLA', value: '15 min' },
        { label: 'Systems secured daily', value: '320+' },
        { label: 'Security operations', value: '24/7' },
      ],
      services: [
        {
          title: 'Proactive Monitoring',
          description:
            'AI-assisted alerts, automated patching, and predictive diagnostics stop issues before they start.',
          tag: 'Always-on care',
        },
        {
          title: 'Cybersecurity Defense',
          description: 'Managed SOC, endpoint protection, and zero-trust architecture keep threats locked out.',
          tag: 'Threat neutralized',
        },
        {
          title: 'Cloud & Hybrid Support',
          description: 'Migration strategy, cloud optimization, and resilient hybrid environments tailored to your stack.',
          tag: 'Scale with confidence',
        },
        {
          title: 'Help Desk Experience',
          description: 'White-glove, 24/7 support with real people, clear SLAs, and rapid escalation paths.',
          tag: 'Human-first support',
        },
        {
          title: 'Strategic vCIO',
          description: 'Roadmaps, budgeting, and quarterly reviews aligned to your business growth targets.',
          tag: 'Executive alignment',
        },
        {
          title: 'Compliance Readiness',
          description: 'Audit-ready policies and controls for HIPAA, SOC 2, PCI, and modern governance frameworks.',
          tag: 'Always audit-ready',
        },
      ],
    };
  },
}).mount('#app');
