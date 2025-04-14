'use client'
import { ProgressProvider } from '@bprogress/next/app'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'
import type { FC, ReactNode } from 'react'
import { Toaster } from 'sonner'

interface Props {
	children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
	const router = useRouter()
	return (
		<ThemeProvider>
			<ProgressProvider
				height="4px"
				options={{ showSpinner: false }}
				shallowRouting
			/>
				<Toaster />
				<HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
		</ThemeProvider>
	)
}

export default Providers
