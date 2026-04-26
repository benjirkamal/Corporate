import * as Icons from "lucide-react"
import type { LucideProps } from "lucide-react"

type IconName = keyof typeof Icons

type DynamicIconProps = LucideProps & {
  name: string
}

/**
 * Renders a lucide-react icon by string name.
 * Falls back to Sparkles if the icon is not found.
 */
export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const iconKey = name as IconName
  const Icon = (Icons[iconKey] as React.ComponentType<LucideProps>) || Icons.Sparkles
  return <Icon {...props} />
}
