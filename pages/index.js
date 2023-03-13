import Card from "@/components/card";

export default function Home({ prices }) {
  return (
    <>
      {/* Navbar */}
      <div className="w-full px-8 bg-black">
        <div className="max-w-6xl mx-auto py-6 flex justify-between">
          {/* Brand */}
          <div className="font-dmsans font-semibold text-3xl text-yellow">
            LIVECOIN
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-full px-8 bg-azure h-screen text-white font-poppins ">
        <div className="max-w-6xl mx-auto">
          {/* Cards */}
          <div className="w-full grid gap-10 grid-cols-1 pt-10 lg:grid-cols-2">
            <Card
              title="BITCOIN"
              imgURL="https://i.imgur.com/hr2SQcF.png"
              alt="btc"
              sign="$"
              price={prices.bitcoin.usd}
              change={prices.bitcoin.usd_24h_change}
            />

            <Card
              title="ETHEREUM"
              imgURL="https://i.imgur.com/uv8SvWj.png"
              alt="eth"
              sign="$"
              price={prices.ethereum.usd}
              change={prices.ethereum.usd_24h_change}
            />

            <Card
              title="SOLANA"
              imgURL="https://i.imgur.com/zjTSCKQ.png"
              alt="sol"
              sign="$"
              price={prices.solana.usd}
              change={prices.solana.usd_24h_change}
            />

            <Card
              title="BINANCE COIN"
              imgURL="https://i.imgur.com/PJ21RTI.png"
              alt="mtc"
              sign="$"
              price={prices.binancecoin.usd}
              change={prices.binancecoin.usd_24h_change}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cbinancecoin&vs_currencies=usd%2Cphp%2Ceur&include_24hr_change=true"
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      prices: data,
    },
  };
}
