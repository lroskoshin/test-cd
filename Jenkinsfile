pipeline {
  agent {
    node {
      label 'Begin'
    }

  }
  stages {
    stage('Checkout') {
      agent {
        node {
          label 'Nodejs'
        }

      }
      steps {
        publishChecks()
      }
    }

  }
}