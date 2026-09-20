/**
 * CERTIFICATES DATA
 * 
 * Add, modify, or remove certificate entries below.
 * Each entry supports:
 * - id: unique string key
 * - title: Certificate name
 * - issuer: Organization / platform (e.g. Google Cloud, Coursera, DeepLearning.AI, HackerRank)
 * - date: Date or year of completion
 * - credentialId: (Optional) ID or code for verification
 * - credentialUrl: (Optional) URL to view or verify the certificate
 * - skills: Array of skill tag strings
 * - summary: Brief description of what was covered
 */

export const certificatesData = [
  {
    id: "cert-1",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI & Coursera",
    date: "2025",
    credentialId: "DL-AI-2025-88",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Python", "Computer Vision"],
    summary: "Mastered fundamental deep learning concepts including Convolutional Networks, RNNs, Transformers, Optimization, and Model Diagnostics."
  },
  {
    id: "cert-2",
    title: "Google Cloud Certified Data Engineer",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "GCP-DE-994821",
    credentialUrl: "https://www.cloudskillsboost.google",
    skills: ["BigQuery", "Dataflow", "Pub/Sub", "Data Warehousing", "GCP"],
    summary: "Demonstrated expertise in designing, building, operationalizing, and monitoring data processing systems on Google Cloud Platform."
  },
  {
    id: "cert-3",
    title: "Python & Algorithms Certification",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "HR-PY-772109",
    credentialUrl: "https://www.hackerrank.com/certificates",
    skills: ["Python", "Data Structures", "Algorithms", "Object-Oriented Programming"],
    summary: "Advanced verification of core data structures, algorithmic complexity optimization, and clean Pythonic software design."
  }
];

export default certificatesData;
