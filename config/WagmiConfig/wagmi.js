import { configureChains, createClient } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider, webSocketProvider } = configureChains(
    [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
    ],
    [
        // https://dashboard.alchemy.com/ 获取 Alchemy API
        alchemyProvider({ apiKey: 'Z2xliWVjYToNgU62-55w8-UuY28l79Zq' }),
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
