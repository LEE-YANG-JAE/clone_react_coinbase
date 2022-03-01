import { sanityClient } from "@sanity/client";

export const client = sanityClient({
    projectId: '255aphno',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skF76b3nfDvajbHq8bE20RPt4nP57iiHs3OsGWSoRfSR6OaECJaXsRb1Qk1J438qdcNqHxm7TYANtUOQgSbnBxBQmtahKDOYP8rT98IP8IsYZnI8DeVzyMIUZWXuSbotRCtpWICxCYUcM31v6WEyynE0u7DALtRHVUgsJ3IusgXYHzj4R9TF',
    useCdn: false
});