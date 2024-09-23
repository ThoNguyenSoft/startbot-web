/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from '@/core/components/atom/use-toast'
import { inviteOneUser, reInviteOneUser, verifyOneUser } from '@/core/models/service/user.service'
import { TInvitePOST, TReInvitePOST, TVerifyPOST } from '@/types/forms/common'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useInvite = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate: mPost } = useMutation({
    mutationFn: (data: TInvitePOST) => inviteOneUser(data),
    onSuccess: (data: any) => {
      if (data?.message === 'A user with this email address has already been registered') {
        toast({
          title: 'Email has been registered'
        })
        return
      }
      if (data?.success === false) {
        toast({
          title: 'Authentication failed'
        })
        return
      }

      toast({
        title: 'Invitation successful'
      })
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: () => {
      toast({
        title: 'Invitation failed'
      })
    }
  })
  const { mutate: mPostVerify } = useMutation({
    mutationFn: (data: TVerifyPOST) => verifyOneUser(data),
    onSuccess: (data: any) => {
      if (data?.message === 'A user with this email address has already been registered') {
        toast({
          title: 'Email has been registered'
        })
        return
      }
      if (data?.success === false) {
        toast({
          title: 'Authentication failed'
        })
        return
      }

      toast({
        title: 'Authentication successful'
      })
      queryClient.invalidateQueries({ queryKey: ['users'] })
      window.location.replace('/sign-in')
    },
    onError: () => {
      toast({
        title: 'Authentication failed'
      })
    }
  })
  const { mutate: mPostReInviteOneUser } = useMutation({
    mutationFn: (data: TReInvitePOST) => reInviteOneUser(data),
    onSuccess: () => {
      toast({
        title: 'Invitation successful'
      })
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: () => {
      toast({
        title: 'Invitation failed'
      })
    }
  })

  return { mPost, mPostVerify, mPostReInviteOneUser }
}

export default useInvite
