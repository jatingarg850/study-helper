const axios = require('axios');

// Replace with your actual agent ID from the logs
const AGENT_ID = 'A42AF76FL36JJ92RR92XP64XD37EC54H';

async function checkAgent() {
  try {
    console.log('Checking agent status...');
    const response = await axios.get(`http://localhost:3000/api/agora/agent/${AGENT_ID}`);
    console.log('\n✅ Agent Status:');
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('\n❌ Error checking agent:');
    console.error(error.response?.data || error.message);
  }
}

checkAgent();
