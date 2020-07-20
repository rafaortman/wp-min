<footer id="siteRodape">
    <?php if ( is_user_logged_in() ): ?>
        <a href="<?php echo admin_url(); ?>">
            WP-admin
        </a>
    <?php endif; ?>
</footer>

<?php wp_footer(); ?>

</body>
</html>
