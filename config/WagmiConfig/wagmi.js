import { configureChains, createClient } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { argentWallet, trustWallet, ledgerWallet, injected } from '@rainbow-me/rainbowkit/wallets';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider, webSocketProvider } = configureChains(
    [
        mainnet,
        goerli,
        polygon,
        optimism,
        arbitrum,
    ],
    [
        // https://dashboard.alchemy.com/ 获取 Alchemy API
        // alchemyProvider({ apiKey: process.env.API_KEY }),
        alchemyProvider({ apiKey: "Z2xliWVjYToNgU62-55w8-UuY28l79Zq" }),
        publicProvider(),
    ]
);

const { wallets } = getDefaultWallets({
    appName: 'RainbowKit demo',
    chains,
});

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ chains }),
            trustWallet({ chains }),
            ledgerWallet({ chains }),
        ],
    },
]);


export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});
