  <template>
  <div class="pb-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand mx-5" href="#">Lendex Admin</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          
            <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/"
                >Dashboard </nuxt-link
              >            
              </li>
              <li class="nav-item">
              <nuxt-link class="nav-link" aria-current="page" to="/my_details"
                >My Details </nuxt-link
              >            
              </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/education">
                Education
                </nuxt-link>       
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/experiences" 
                >Experience</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/projects" 
                >Projects</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/testimonials" 
                >Testimonial</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/service" 
                >Service</nuxt-link
              >
            </li>
            
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/special-skills" 
                >Special Skills</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/trusted_company" 
                >Trusted Company</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  </template>

  <script>
    export default {};
  </script>
</template>

<script>
export default {};
</script>
