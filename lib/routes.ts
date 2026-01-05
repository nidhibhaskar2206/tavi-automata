export const routes = {
  home: () => "/",
  about: () => "/about",
  login: () => "/login",
  register: () => "/register",
  forgotPassword: () => "/forgot-password",
  dashboard: () => "/dashboard",
  workspace: (id: string) => `/workspace/${id}`,
  workspaceRecords: (id: string) => `/workspace/${id}/records`,
  workspaceUpload: (id: string) => `/workspace/${id}/upload`,
  workspaceExtract: (id: string) => `/workspace/${id}/extract`,
  workspaceExcelOps: (id: string) => `/workspace/${id}/excel-operations`,
};
