'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Avatar className="h-9 w-9 shrink-0 border border-[rgba(110,26,55,0.12)]">
        <AvatarImage src={user?.avatar} alt={user?.name ?? 'Account'} />
        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-9 gap-1.5 border-[rgba(110,26,55,0.2)] text-[#5f4750] hover:bg-[rgba(110,26,55,0.06)] hover:text-[#8f1f3f]"
        onClick={logout}
        aria-label="Sign out"
      >
        <LogOut className="h-4 w-4" />
        <span className="hidden sm:inline">Sign out</span>
      </Button>
    </div>
  )
}
