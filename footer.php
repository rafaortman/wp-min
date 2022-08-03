<footer id="siteRodape">

</footer>

<?php if ( is_user_logged_in() ): ?>
    <hr>
    <div class="tac">
        <a href="<?php echo admin_url(); ?>">
            WP-admin
        </a>
    </div>
<?php endif; ?>

<?php wp_footer(); ?>

</body>
</html>
