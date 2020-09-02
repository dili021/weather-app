const createForm = () => `
    <div class="form-wrap">
      <form >
        <input type="text" id="city" placeholder="City"/>
        <div class="form-control">
          <input type="radio" value="metric" name="units" id="celsius"/>
          <label for="celsius">Celsius</label>
        </div>
        <div class="form-control">
          <input type="radio" value="imperial" name="units" id="fahrenheit"/>
          <label for="fahrenheit">Fahrenheit</label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  `;

export default createForm;