<svelte:head>
    <title>Login</title>
    <meta name="description" content="Login page"> 
</svelte:head>

<script>
    import Input from "$lib/components/input.svelte";
</script>

<main class="h-screen w-screen flex flex-row flex-wrap">
    <img src="/intro-bg1.jpg" alt="Login" class="h-full w-1/2 object-cover">
    <div class="w-1/2 flex flex-col justify-center items-center text-center p-60">
        <h1 class="text-3xl text-center mb-8 font-semibold">Sign in to Blogosphere</h1>
        <div class="w-full h-[40px] mb-5">
            <Input type="email" placeholder="Email" />
        </div>
        <div class="w-full h-[40px] mb-5">
            <Input type="password" placeholder="Password" />
        </div>
    </div>
</main>