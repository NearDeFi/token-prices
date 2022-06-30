import fetch from "node-fetch"
import { pick } from "ramda"

const TOKENS = [
  "meta-token.near",
  "token.v2.ref-finance.near",
  "token.burrow.near",
]

const main = async () => {
  console.info("main")
  const prices = await fetch(
    "https://indexer.ref-finance.net/list-token-price",
  ).then((res) => res.json())

  console.info(pick(TOKENS, prices))
}

main()
