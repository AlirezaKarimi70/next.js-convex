import { mutation } from './_generated/server';
import { ConvexError, v } from 'convex/values';
import { authComponent } from './betterAuth/auth';

export const createPost = mutation({
    args: {
        title: v.string(),
        content: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await authComponent.safeGetAuthUser(ctx);
        if (!user) {
            throw new ConvexError('Unauthorized')
        }
        const post = await ctx.db.insert('posts', {
            content: args.content,
            title: args.title,
            authorId: user._id,
        })
        console.log('Post created with ID:', post);
        return post
    }
})