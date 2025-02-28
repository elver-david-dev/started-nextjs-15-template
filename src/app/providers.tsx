'use client'
import { HeroUIProvider } from '@heroui/react'
import { AppProgressBar as ProgressBar, useRouter } from 'next-nprogress-bar'
import { ThemeProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'
import { Toaster } from 'sonner'

interface Props {
	children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
	const router = useRouter()
	return (
		<>
			<ProgressBar
				options={{ showSpinner: false }}
				color="#000"
				shallowRouting
			/>

			<Toaster />
			<HeroUIProvider navigate={router.push}>
				<ThemeProvider>{children}</ThemeProvider>
			</HeroUIProvider>
		</>
	)
}

export default Providers
