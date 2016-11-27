node {
   // Mark the code checkout 'stage'....
   stage 'Checkout'

   // Get some code from a GitHub repository
   git credentialsId: '5239c33e-10ab-4c1b-a4a0-91b96a07955e', url: 'git@bitbucket.org:matthew_astutech/dashboard.git'
   
   // Install dependencies
   stage 'Install dependencies'
   
   // Run installer
   sh 'npm install'

   // Test stage
   stage 'Test'
   
   // Run the tests
   sh "npm test"

   // Publish results
   publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'coverage/lcov-report', reportFiles: 'index.html', reportName: 'Coverage Report'])
}
