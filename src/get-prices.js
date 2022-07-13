import fetch from "node-fetch"
import { pick } from "ramda"

const TOKENS = [
  "meta-token.near",
  "token.v2.ref-finance.near",
  "token.burrow.near",
]

const main = async () => {
  const prices = await fetch(
    "https://indexer.ref.finance/list-token-price",
  ).then((res) => res.json())

  console.info(JSON.stringify(pick(TOKENS, prices)))
}

main()
