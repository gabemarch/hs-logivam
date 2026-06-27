import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Package,
  Receipt,
  Search,
  Shield,
  ShieldCheck,
  TreePine,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { cn } from './utils'

export const iconMap = {
  package: Package,
  tree: TreePine,
  factory: Factory,
  building: Building2,
  file: FileText,
  book: BookOpen,
  receipt: Receipt,
  search: Search,
  layers: Layers,
  shield: Shield,
  graduation: GraduationCap,
  award: Award,
  chart: BarChart3,
  users: Users,
  globe: Globe,
  briefcase: Briefcase,
  shieldCheck: ShieldCheck,
} as const satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconMap

interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const Component = iconMap[name]
  return <Component className={cn('h-5 w-5 shrink-0', className)} strokeWidth={1.5} aria-hidden />
}
