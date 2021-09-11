import type { APIHandler } from "aleph/types"

export const handler: APIHandler = ({ response, router }) => {
  response.json({ name: router.params.name })
}
