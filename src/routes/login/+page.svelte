<svelte:head>
    <title>Login</title>
    <meta name="description" content="Login page"> 
</svelte:head>

<script lang="ts">
    import Input from "$lib/components/input.svelte";

    let email = "";
    let password = "";

    function login(e: Event) {
        e.preventDefault();

        console.log(email, password)
    }
</script>

<main class="h-screen w-screen flex flex-row flex-wrap">
    <img src="/intro-bg1.jpg" alt="Login" class="h-full w-1/2 object-cover">
    <div class="w-1/2 h-full flex flex-col justify-center items-center text-center px-60 py-40">
        <img src="/blog-logo-label.png" alt="site logo" class="w-2/3 h-1/2 mb-5">
        <h1 class="text-3xl text-center mb-8 font-semibold">Sign in to Blogosphere</h1>
        <form on:submit={login} class="w-full">
            <div class="w-full h-[40px] mb-5">
                <Input type="email" placeholder="Email" bind:value={email}/>
            </div>
            <div class="w-full h-[40px] mb-5">
                <Input type="password" placeholder="Password" bind:value={password}/>
            </div>
            <button type="submit" class="w-full h-[40px] bg-primary text-white rounded-full font-[500]">Login</button>
        </form>
        <p class="mt-5 text-gray-500 font-medium">Don't have an account? <a href="/register" class="text-primary font-semibold">Sign Up now</a></p>
    </div>
</main>