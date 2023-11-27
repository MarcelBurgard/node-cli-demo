import p from "phin";

export const getAgePrediction = async (name: string, verbose: boolean) => {
  if (verbose) {
    console.info("Request age prediction from https://agify.io/.");
  }
  const res = await p<{ age: string }>({
    url: `https://api.agify.io/?name=${name}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    parse: "json",
  });

  if (res.statusCode != 200) {
    console.error(`Wasn't able to get a predicted age for ${name}. Sorry :(`);
  }

  return res.body.age;
};
