<script lang="ts">
    export let type = 'text';
    export let placeholder = '';
    export let required = false;
    export let value = '';
  
    function handleInput(event: any) {
      value = event.target.value;
    }
  </script>
  
  <input 
    type={type} 
    placeholder={placeholder} 
    required={required} 
    value={value} 
    on:input={handleInput} 
    class="min-w-full h-full bg-gray-100 rounded-full pl-5 focus:outline-none focus:ring-0" 
  />
  