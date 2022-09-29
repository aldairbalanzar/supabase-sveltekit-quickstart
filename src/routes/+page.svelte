<script lang="ts">
    import { currentUser } from '../lib/sessionStore'
    import { supabase } from '../lib/supabaseClient'
    import Auth from '../lib/Auth.svelte'
    import Profile from '../lib/Profile.svelte'
  
    currentUser.set(supabase.auth.user())

    let user: any | null;
    currentUser.subscribe(v => user = v);
  
    supabase.auth.onAuthStateChange((_, session: any) => {
    if(user) {
        user.set(session.user);
    }
    })
  </script>
  
  <div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}
    <Profile />
    {:else}
    <Auth />
    {/if}
  </div>
