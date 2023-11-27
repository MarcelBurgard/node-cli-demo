import p from "phin";

export const getCatFacts = async (verbose: boolean) => {
  if (verbose) {
    console.info("Request cat fact from https://catfact.ninja/#/Facts.");
  }
  const res = await p<{ fact: string }>({
    url: "https://catfact.ninja/fact",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    parse: "json",
  });

  if (res.statusCode != 200) {
    throw new Error("Wasn't able to get fact about cats. Sorry :(");
  }

  return res.body.fact;
};
