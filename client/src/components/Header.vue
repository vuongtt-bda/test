<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <form class="form-inline my-2 my-lg-0">
                <span>{{account}}</span>
                <span>{{getShortAccount}}</span>
                <button @click='connectNetwork' class="btn btn-outline-success my-2 my-sm-0" type="submit">Connect Network</button>
            </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import Web3 from 'web3';
import { mapGetters, mapState } from 'vuex';
// import getContractMTK from '../utils/getContractMTK';

export default {
  name: 'Header',
  computed: {
      ...mapState(['account']),
      ...mapGetters(['getShortAccount'])
  },
  methods: {
    connectNetwork:  async () => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert(accounts[0])
        this.$store.commit("SET_ACCOUNT", {account: accounts[0]});

        // web3 = new Web3(window.ethereum.currentProvider);
        // const contractMTK = await getContractMTK(web3);
        // this.$store.commit('SET_NGANHANG', { contractMTK }); 

        window.ethereum.on('accountsChanged', function (accounts) { 
          this.$store.commit('SET_ACCOUNT', {account: accounts[0]});
        });
      } else {
          alert('chưa cài đặt metamask');
      }
    },
  },
}
</script>

