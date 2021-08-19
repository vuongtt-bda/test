<template>
  <div class="home">
    <div class="container">
      <h1>Home</h1>
      <div class="alert alert-danger" role="alert">
        Phí giao dịch chuyển tiền: 0.05%
      </div>

      <div class="mt-3 row">
        <div class="col-2"></div>
        <div class="col-8">
          <form>
            <div class="form-group">
              <label>Địa chỉ người nhận </label>
              <input type="text" class="form-control">
              <small class="form-text text-muted">Hãy kiểm tra đúng địa chỉ</small>
            </div>
            <div class="form-group">
              <label >Số tiền</label>
              <input type="number" class="form-control" >
              <small class="form-text text-muted ">Đơn vị chuyển ether. 1 ether = 1000000000000000000 wei</small>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input">
              <label class="form-check-label" >Tôi chắc chắn muốn chuyển tiền</label>
            </div>
            <button type="submit" class="btn btn-primary">Chuyển tiền</button>
          </form>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
