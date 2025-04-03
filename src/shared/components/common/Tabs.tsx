'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef
} from 'react'

import { cn } from '@/shared/utils/tw-merge'

const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
	ComponentRef<typeof TabsPrimitive.List>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			'mr-auto flex w-full items-start gap-x-[36px]',
			className
		)}
		{...props}
	/>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
	ComponentRef<typeof TabsPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			'inline-flex w-[295px] items-center justify-center whitespace-nowrap rounded-[25px] bg-[#F3F3F3] py-[12px] font-cormorant_regular text-[28px] text-black transition-all focus-visible:border focus-visible:border-black disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border data-[state=active]:border-black data-[state=active]:shadow',
			className
		)}
		{...props}
	/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
	ComponentRef<typeof TabsPrimitive.Content>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn('mt-[55px] w-full', className)}
		{...props}
	/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
