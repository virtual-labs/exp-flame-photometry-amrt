### Procedure

<br><br><br><br><br>

# Procedure to View the Experiment Animation.

<style>
.download-section {
  /* background: #fff; */
  padding: 5px;
  border-radius: 12px;
  margin-bottom: 10px;
}

.download-link {
  display: inline-flex;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.download-link:hover {
  background-color: #0056b3;
}

.download-link svg {
  margin-right: 8px;
}

.copy-container {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  max-width: 600px;
  font-family: Arial, sans-serif;
  position: relative;
}

.link-text {
  flex: 1;
  word-break: break-word;
}

.copy-icon {
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  background-color: #e0e0e0;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.copy-icon:hover {
  background-color: #ccc;
}

.tooltip {
  position: absolute;
  right: 0;
  top: -30px;
  background: #333;
  color: #fff;
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

.tooltip.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
<div class="download-section" style="text-align: center;">
    <a href="simulation/flash/flashplayer.exe" class="download-link" download>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
        <path d="M.5 9.9V14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.9a.5.5 0 0 0-1 0V14H1V9.9a.5.5 0 0 0-1 0z"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>
      Click Here to Download Flash Player
    </a>
  </div>

<br>
<div class="copy-container">
  <p><h4>Flash Content link:</h4></p>
  <span class="link-text" id="copyText"></span>
  <div class="copy-icon" onclick="copyLink()">📋</div>
  <div class="tooltip" id="tooltip">Copied!</div>
</div>

<script>
  const currentUrl = window.location.href;
  const basePath = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  const swfPath = basePath + "/simulation/flash/simulation/index.swf";
  document.getElementById("copyText").textContent = swfPath;

  function copyLink() {
    const text = document.getElementById("copyText").textContent;
    const tooltip = document.getElementById("tooltip");

    navigator.clipboard.writeText(text).then(() => {
      // Show the tooltip
      tooltip.classList.add("show");

      // Hide after 1 second
      setTimeout(() => {
        tooltip.classList.remove("show");
      }, 1000);
    });
  }
</script>

<h2>Instructions to run the Flash simulator on your system:</h2>

<strong>▶ Windows system</strong><br>
<strong>Step 1:</strong> Open Flash Player<br>
<img src="images/flash/figure1.jpg" alt="Flash Debugger" width="500px"><br>
<strong>Step 2:</strong> Copy the Flash content link by click the 📋 icon provided above.<br>

<strong>Step 3:</strong> Click <em>File → Open</em> from the Flash Player menu.<br>
<strong>Step 4:</strong> Paste the Flash content link in the Open window of the Flash Player and click the OK button.<br>
<img src="images/flash/figure2.jpg" alt="Open Flash Link" width="500px"><br><br>

<strong>▶ Linux system</strong><br>
<strong>Step 1:</strong> Install <code>Wine</code> on your Linux system.<br>
For Ubuntu: <code>sudo apt update</code><br>
<code>sudo apt install wine</code><br>
For Fedora: <code>sudo dnf install wine</code><br>
<strong>Step 2:</strong> Open terminal and navigate to the folder where the Flash Player is downloaded.<br>
<strong>Step 3:</strong> Open the Flash Player using <code>wine flashplayer.exe</code><br>
<img src="images/flash/figure1.jpg" alt="Flash Debugger" width="500px"><br>
<strong>Step 4:</strong> Copy the Flash content link by click the 📋 icon provided above.<br>
<strong>Step 5:</strong> Click <em>File → Open</em> from the Flash Player menu.<br>
<strong>Step 6:</strong> Paste the Flash content link in the Open window of the Flash Player and click OK.<br>
<img src="images/flash/figure2.jpg" alt="Open Flash Link" width="500px">
