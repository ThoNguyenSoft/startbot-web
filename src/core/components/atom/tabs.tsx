import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@/lib/utils/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 w-full items-center justify-center rounded-md bg-[#FAFAFA] text-muted-foreground dark:bg-[#2E2E2E]',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // 'inline-flex items-center justify-center whitespace-nowrap rounded-none bg-[#FFFFFF] px-3 py-1.5 text-sm font-bold transition-all focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:rounded-md data-[state=active]:bg-[#2E2E2E] data-[state=active]:text-white dark:bg-[#2E2E2E] dark:data-[state=active]:bg-[#FFFFFF] dark:data-[state=active]:text-[#212121] ',
      'inline-flex items-center justify-center whitespace-nowrap rounded-none bg-[#FAFAFA] px-3 py-1.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:rounded-2xl data-[state=active]:bg-[#2E2E2E] data-[state=active]:text-white dark:bg-[#2E2E2E] dark:data-[state=active]:bg-[#FFFFFF] dark:data-[state=active]:text-[#212121]',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      // 'ring-offset-background focus-visible:ring-ring mt-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'mt-5 focus-visible:outline-none',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
