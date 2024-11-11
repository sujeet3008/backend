const localDomainName ="http://localhost:5000";





export const API ={
    adminLogin:{
        url: `${localDomainName}/api/login`,
        method :'post'
    },
    getDocuments: {
        url: `${localDomainName}/api/documents`,
        method: 'get',
    },
    uploadDocument: {
        url: `${localDomainName}/api/documents/upload`,
        method: 'post',
    }
}