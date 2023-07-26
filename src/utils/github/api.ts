export const getProjects = async () => {
  const response = await fetch('https://api.github.com/users/dawisen/repos');
  return await response.json();
}
  
export const getActiveDeployment = async (repoName: string, deploymentId: number) => {
  // https://api.github.com/repos/dawisen/budbuddy/deployments/335156225/statuses
  const response = await fetch(`https://api.github.com/repos/dawisen/${repoName}/deployments/${deploymentId}/statuses`);
  return await response.json();
}

export const getAllDeployments = async (repoName: string) => {
// https://api.github.com/repos/dawisen/budbuddy/deployments
  const response = await fetch(`https://api.github.com/repos/dawisen/${repoName}/deployments`);
  return await response.json();
}