<template>
  <div>
    <form class="max-w-sm mx-auto space-y-3">
      <h1 class="font-bold text-3xl md:text-4xl text-center">
        Rent Items Easily
      </h1>
      <p class="text-center">Lorem ipsum dolor sit amet consectetur,</p>
      <div class="flex relative">
        <div class="w-full">
          <label
            for="text"
            class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Search for items</label
          >
          <input
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-5 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for what you want to rent"
            required
          />
        </div>

        <button
          type="submit"
          class="absolute top-0 right-0 m-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>
