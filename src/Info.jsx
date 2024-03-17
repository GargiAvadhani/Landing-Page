import './Info.css'; // Import the CSS file

const Info = () => {
  return (
    <div className="info-container">
      <h2 className="info-heading">Detect and Analyse network traffic with ease</h2>
      <p className="info-text">
        Organisations are adopting various technologies today to simplify processes and drive business productivity. While adapting to these technologies and networking systems, there is a constant need to improve cybersecurity components to match the ever-evolving cyber threats.
        <br /><br />
        Considering these increasing demands, Jio has done an in-house development of a service known as NetSensor. It offers vulnerabilities investigation features like tracking attacker’s lateral movement, spread of malware and compromised assets with unmatched cost-effectiveness and least number of false positives.
        <br /><br />
        NetSensor also helps improve business Security Operations Center (SOC) performance, by detecting network leaks and breaches with its highly scalable, low-compute and remotely governed solution. These solutions are easy to deploy and are platform agnostic. Thus, NetSensor helps businesses improve service level agreements, reduce risk and rally regulatory compliance across business landscape.
      </p>
    </div>
  );
};

export default Info;